'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from './ui/button';

interface CalButtonProps {
  calLink: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  trackEvent?: string;
  trackData?: Record<string, any>;
}

function CalButtonInner({
  calLink,
  children,
  size = "lg",
  variant = "primary",
  className,
  trackEvent = "Schedule",
  trackData
}: CalButtonProps) {
  const searchParams = useSearchParams();
  const [calUrl, setCalUrl] = useState(calLink);
  const [clientIp, setClientIp] = useState<string>('');

  // Obtener la IP del cliente al montar el componente
  useEffect(() => {
    fetch('/api/client-ip')
      .then(res => res.json())
      .then(data => setClientIp(data.ip))
      .catch(err => console.error('Error fetching client IP:', err));
  }, []);

  useEffect(() => {
    const fbclid = searchParams.get('fbclid');
    const url = new URL(calLink);

    // Capturar y preservar parámetros UTM
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    utmParams.forEach(param => {
      const value = searchParams.get(param);
      if (value) {
        url.searchParams.set(param, value);
      }
    });

    if (fbclid) {
      // Construir fbc igual que en WordPress
      const requestTime = Math.floor(Date.now() / 1000);
      const fbc = `fb.1.${requestTime}.${fbclid}`;

      // Obtener datos del cliente
      const eventSourceUrl = window.location.host + window.location.pathname;
      const clientUserAgent = navigator.userAgent;

      // Construir data_uuid con el formato correcto: espacios alrededor de los separadores |
      const dataUuid = ` |fbc=${fbc} |client_ip_address=${clientIp} | client_user_agent=${clientUserAgent} | event_source_url=${eventSourceUrl} | event_time=${requestTime} |`;

      // Agregar data_uuid a la URL de Cal.com
      url.searchParams.set('data_uuid', dataUuid);
    }

    setCalUrl(url.toString());
  }, [searchParams, calLink, clientIp]);

  const handleClick = () => {
    // Abrir Cal.com en nueva pestaña
    window.open(calUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      size={size}
      variant={variant}
      className={className}
      onClick={handleClick}
      trackEvent={trackEvent}
      trackData={trackData}
    >
      {children}
    </Button>
  );
}

export function CalButton(props: CalButtonProps) {
  return (
    <Suspense fallback={
      <Button
        size={props.size}
        variant={props.variant}
        className={props.className}
      >
        {props.children}
      </Button>
    }>
      <CalButtonInner {...props} />
    </Suspense>
  );
}
