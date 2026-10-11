import Link from "next/link";
import { notFound } from "next/navigation";
import { HostPageHeading, HostShell } from "@/components/host-shell";
import { HostEventActions } from "@/components/host-event-actions";
import { event } from "@/lib/mock-data";

export default async function HostEventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (id !== event.slug) notFound();
  return <HostShell active="event"><Link className="host-back-link" href="/host">← Back to overview</Link><HostPageHeading eyebrow="HOST WORKSPACE · EVENT MANAGEMENT" title={<>AFTERGLOW<span className="pink-dot">.</span></>} description="Friday, October 24 · Somewhere Nowhere, New York" action={<span className="host-status"><i/> REGISTRATION OPEN</span>}/>
    <div className="host-event-dashboard"><section className="host-main-card"><div className="host-card-heading"><div><span className="eyebrow">GUEST READINESS</span><h2>People are getting ready.</h2></div><span className="host-privacy">SAMPLE DATA</span></div><div className="host-readiness"><b>42</b><span>of 60 guest places are filled and quiz-ready</span><div className="host-progress"><i><span/></i></div><div className="host-readiness-stats"><span><b>42</b> ready</span><span><b>18</b> spots open</span></div></div><div className="host-event-actions"><Link className="button button-secondary" href="/e/afterglow-friday">Preview guest invite ↗</Link><Link className="host-text-link" href="/host/events/afterglow-friday/safety">Review safety reports →</Link></div></section>
      <aside className="host-side-card"><span className="eyebrow">EVENT DETAILS</span><dl><div><dt>Date</dt><dd>Friday, October 24</dd></div><div><dt>Doors</dt><dd>9:00 PM</dd></div><div><dt>Registration closes</dt><dd>8:30 PM</dd></div><div><dt>Reveal</dt><dd>10:30 PM</dd></div><div><dt>Venue</dt><dd>Somewhere Nowhere<br/>New York</dd></div></dl><Link className="host-text-link" href="/host/events/new">Edit event details →</Link></aside></div>
    <section className="host-timeline"><div className="host-section-heading"><div><span className="eyebrow">TONIGHT’S FLOW</span><h2>One step at a time.</h2></div><span className="host-count">EVENT TIMELINE</span></div><div className="host-timeline-steps"><article className="done"><span>✓</span><div><b>Invite guests</b><small>QR code and link are ready</small></div><i>COMPLETE</i></article><article className="current"><span>02</span><div><b>Registration open</b><small>Closes Friday at 8:30 PM</small></div><i>IN PROGRESS</i></article><article><span>03</span><div><b>Check matching readiness</b><small>Only ready guests can be included</small></div><i>UP NEXT</i></article><article><span>04</span><div><b>Reveal introductions</b><small>Scheduled for 10:30 PM</small></div><i>UP NEXT</i></article></div></section>
    <section className="host-ops"><div><span className="eyebrow">HOST CONTROLS</span><h2>Keep the night on track.</h2><p>These controls only show a local preview response.</p></div><HostEventActions/></section>
    <div className="host-footnote">✳ &nbsp;Matching results and guest counts are fictional. This prototype does not store event data.</div>
  </HostShell>;
}
