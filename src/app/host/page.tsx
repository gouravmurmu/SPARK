import Link from "next/link";
import { HostPageHeading, HostShell } from "@/components/host-shell";
import { Button } from "@/components/ui";
import { event } from "@/lib/mock-data";

export default function HostPage() {
  return <HostShell><HostPageHeading eyebrow="HOST WORKSPACE · FRIDAY, OCTOBER 24" title={<>Good evening, Maya<span className="pink-dot">.</span></>} description="Your next SPARK night is coming together." action={<Button href="/host/events/new">＋ Create an event</Button>} />
    <div className="host-stats"><article><small>UPCOMING EVENTS</small><b>01</b><span>One night on your calendar</span></article><article><small>GUESTS READY</small><b>42</b><span>Profiles complete and ready</span></article><article><small>OPEN SPOTS</small><b>18</b><span>Registration is still open</span></article></div>
    <div className="host-section-heading"><div><span className="eyebrow">YOUR CALENDAR</span><h2>Upcoming events</h2></div><span className="host-count">1 EVENT</span></div>
    <article className="host-event-card"><div className="host-event-art"><span>✳</span><b>AFTER<br/>GLOW</b><small>FRIDAY · OCT 24</small></div><div className="host-event-content"><div className="host-event-top"><span className="host-status"><i/> REGISTRATION OPEN</span><span className="host-privacy">PRIVATE PREVIEW</span></div><h3>{event.name}</h3><p>{event.subtitle}</p><div className="host-event-meta"><span>◷ &nbsp;Fri, Oct 24 · 9:00 PM</span><span>⌖ &nbsp;Somewhere Nowhere · New York</span></div><div className="host-progress"><div><span>Guest readiness</span><b>42 / 60</b></div><i><span/></i></div><div className="host-event-actions"><Button href="/host/events/afterglow-friday">Manage event <span>→</span></Button><Link href="/e/afterglow-friday">Preview guest page ↗</Link></div></div></article>
    <section className="host-lower-grid"><article className="host-info-card"><span className="eyebrow">NEXT UP</span><h3>Registration closes</h3><p>Friday, October 24 at 8:30 PM</p><div className="host-info-foot"><span>42 guests have finished their quiz</span><Link href="/host/events/afterglow-friday">View event details →</Link></div></article><article className="host-info-card host-safety-card"><span className="eyebrow">SAFETY CHECK-IN</span><h3>2 reports need review</h3><p>Review redacted reports before the event.</p><div className="host-info-foot"><span>Private content stays hidden</span><Link href="/host/events/afterglow-friday/safety">Open safety tools →</Link></div></article></section>
    <div className="host-footnote">✳ &nbsp;Demo workspace · No event, guest, or moderation changes are saved.</div>
  </HostShell>;
}
