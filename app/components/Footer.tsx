import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="pl-8 md:pl-10 pr-6 md:pr-10 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Image src="/logo.png" alt="Pixel & Byte" width={180} height={40} className="h-8 w-auto mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Bringing clarity to AI. Gold Coast-based consulting for Australian businesses.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/work", label: "Work" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="mailto:zach@pixelandbyte.com.au" className="hover:text-accent transition-colors">zach@pixelandbyte.com.au</a>
              <span>Gold Coast, QLD, Australia</span>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          © 2026 Pixel and Byte. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
