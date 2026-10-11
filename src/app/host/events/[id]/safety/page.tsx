import Link from "next/link";
import { notFound } from "next/navigation";
import { HostPageHeading, HostShell } from "@/components/host-shell";
import { HostReportQueue } from "@/components/host-report-queue";
import { event } from "@/lib/mock-data";

export default async function HostSafetyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (id !== event.slug) notFound();
  return <HostShell active="safety"><Link className="host-back-link" href="/host/events/afterglow-friday">← Back to event</Link><HostPageHeading eyebrow="HOST WORKSPACE · SAFETY" title={<>Look out for each other<span className="pink-dot">.</span></>} description="Review requests for support and keep the event welcoming for everyone." action={<span className="host-report-count">2 OPEN REPORTS</span>}/>
    <div className="host-safety-banner"><span>♡</span><div><b>Safety tools are here to help you respond.</b><p>If someone may be in immediate danger, contact local emergency services and venue staff.</p></div></div>
    <div className="host-section-heading host-report-title"><div><span className="eyebrow">AFTERGLOW · OCTOBER 24</span><h2>Needs your attention</h2></div><span className="host-count">2 REPORTS</span></div><HostReportQueue/>
    <section className="host-audit"><span className="eyebrow">RECENT HOST ACTIVITY</span><div><span className="host-audit-dot"/><p><b>Safety queue opened</b><small>Host workspace · Today at 8:15 PM</small></p></div><div><span className="host-audit-dot muted"/><p><b>Event guidelines confirmed</b><small>At event setup · Today at 7:56 PM</small></p></div></section>
    <div className="host-footnote">✳ &nbsp;Reports and actions are fictional samples. This preview is not monitored and cannot contact emergency services.</div>
  </HostShell>;
}
