'use client';

import { useEffect } from 'react';

interface FacebookViewContentProps {
  content_name?: string;
  content_ids?: string[];
  content_type?: string;
  value?: number;
  currency?: string;
  niche?: string;
}

export function FacebookViewContent({
  content_name,
  content_ids,
  content_type,
  value,
  currency,
  niche
}: FacebookViewContentProps) {
  useEffect(() => {
    // Esperar a que Facebook Pixel esté listo
    const trackViewContent = () => {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        const params: Record<string, any> = {};

        if (content_name) params.content_name = content_name;
        if (content_ids) params.content_ids = content_ids;
        if (content_type) params.content_type = content_type;
        if (value) params.value = value;
        if (currency) params.currency = currency;
        if (niche) {
          params.niche = niche;
          params.content_category = niche;
        }

        // Track ViewContent con parámetros
        (window as any).fbq('track', 'ViewContent', params);

        // También enviar a Conversions API
        sendToConversionsAPI(params);
      }
    };

    // Intentar trackear inmediatamente
    trackViewContent();

    // Si no está listo, intentar después de un breve delay
    const timeout = setTimeout(trackViewContent, 1000);

    return () => clearTimeout(timeout);
  }, [content_name, content_ids, content_type, value, currency, niche]);

  return null;
}

async function sendToConversionsAPI(params: Record<string, any>) {
  try {
    // Obtener cookies de Facebook
    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');

    await fetch('/api/conversion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName: 'ViewContent',
        customData: params,
        fbp,
        fbc,
      }),
    });
  } catch (error) {
    console.error('Error sending ViewContent to Conversions API:', error);
  }
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }

  return null;
}
