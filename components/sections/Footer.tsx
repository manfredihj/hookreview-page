
export function Footer() {
  return (
    <footer className="py-10 border-t border-white/20 mt-16">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/70">© {new Date().getFullYear()} HookflowAI · All rights reserved</p>
        <div className="text-sm text-white/70 flex gap-4">
          <a href="/politicas" className="hover:underline hover:text-white">Políticas</a>
          <a href="/terminos" className="hover:underline hover:text-white">Términos</a>
          <a href="/contacto" className="hover:underline hover:text-white">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
