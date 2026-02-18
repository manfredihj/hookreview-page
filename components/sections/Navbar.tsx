import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-white.png"
            alt="HookflowAI"
            width={160}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/soluciones-ai-para-ecommerce"
            className="text-white/80 hover:text-white text-sm transition hidden md:block"
          >
            E-commerce
          </Link>
          <Link
            href="/soluciones-ai-para-inmobiliarias"
            className="text-white/80 hover:text-white text-sm transition hidden md:block"
          >
            Inmobiliarias
          </Link>
          <Link
            href="/agencias"
            className="text-white/80 hover:text-white text-sm transition hidden md:block"
          >
            Agencias
          </Link>
          {/* <Link
            href="/blog"
            className="text-white/80 hover:text-white text-sm transition hidden md:block"
          >
            Blog
          </Link> */}
        </div>
      </div>
    </nav>
  );
}
