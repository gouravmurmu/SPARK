import Link from "next/link";
import type { ReactNode } from "react";
import { Brand } from "@/components/ui";

export function HostShell({ children, active = "overview" }: { children: ReactNode; active?: "overview" | "event" | "safety" | "quizzes" }) {
  return <div className="host-app"><header className="host-topbar"><Brand /><div className="host-account"><span className="host-avatar" aria-hidden="true">MC</span><span><b>Maya Chen</b><small>Demo host account</small></span></div></header><div className="host-layout"><aside className="host-sidebar" aria-label="Host workspace"><div className="host-side-label">WORKSPACE</div><Link aria-label="Overview" className={active === "overview" ? "active" : ""} href="/host">◫ <span>Overview</span></Link><Link aria-label="My event" className={active === "event" ? "active" : ""} href="/host/events/afterglow-friday">✳ <span>My event</span></Link><Link aria-label="Quiz library" className={active === "quizzes" ? "active" : ""} href="/host/quizzes">☷ <span>Quiz library</span></Link><Link aria-label="Safety and reports, 2 open" className={active === "safety" ? "active" : ""} href="/host/events/afterglow-friday/safety">♡ <span>Safety & reports</span><i>2</i></Link><div className="host-sidebar-bottom"><div className="host-demo-label">✳ HOST PREVIEW</div><p>Everything here uses sample data. Changes are temporary.</p><Link href="/">← Guest experience</Link></div></aside><main className="host-main">{children}</main></div></div>;
}

export function HostPageHeading({ eyebrow, title, description, action }: { eyebrow: string; title: ReactNode; description: string; action?: ReactNode }) {
  return <div className="host-page-heading"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>{action}</div>;
}
