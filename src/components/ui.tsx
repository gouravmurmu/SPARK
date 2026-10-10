import Link from "next/link";
import type { ReactNode } from "react";

export function Brand({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`brand ${light ? "brand-light" : ""}`} aria-label="SPARK home"><span className="brand-mark">✳</span> spark<span className="brand-period">.</span></Link>;
}

export function Header({ back }: { back?: string }) {
  return <header className="topbar"><Brand /><div className="topbar-right"><span className="prototype-tag"><i /> PROTOTYPE</span>{back ? <Link className="nav-back" href={back}>← Back</Link> : <Link className="nav-link" href="/host">For hosts <span>↗</span></Link>}</div></header>;
}

export function Button({ children, href, kind = "primary", className = "", type = "button" }: { children: ReactNode; href?: string; kind?: "primary" | "secondary" | "quiet"; className?: string; type?: "button" | "submit" }) {
  const cls = `button button-${kind} ${className}`;
  return href ? <Link href={href} className={cls}>{children}</Link> : <button type={type} className={cls}>{children}</button>;
}

export function PageShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <main className={`page-shell ${className}`}>{children}</main>;
}

export function DemoNote({ children = "This is a visual prototype. Matching, consent, and messaging are simulated with demo data." }: { children?: ReactNode }) {
  return <div className="demo-note"><span>✳</span><p>{children}</p></div>;
}

export function Footer() { return <footer className="footer"><Brand /><span>Made for nights worth remembering.</span><div><Link href="/privacy">Privacy</Link><Link href="/guidelines">Guidelines</Link></div></footer>; }
