import Link from "next/link";
import { HostShell, HostPageHeading } from "@/components/host-shell";
import { HostEventForm } from "@/components/host-event-form";

export default async function NewHostEventPage({ searchParams }: { searchParams: Promise<{ quiz?: string }> }) {
  const { quiz } = await searchParams;
  return <HostShell><Link className="host-back-link" href="/host">← Back to overview</Link><HostPageHeading eyebrow="HOST WORKSPACE · NEW EVENT" title="Start with the basics." description="Set the scene for a night where meeting someone new feels easy."/><div className="host-create-layout"><section className="host-form-card"><div className="host-card-heading"><span className="eyebrow">EVENT DETAILS</span><span className="host-step">01 / 01</span></div><HostEventForm initialQuiz={quiz}/></section><aside className="host-preview-card"><span className="eyebrow">A GOOD EVENT HAS…</span><div className="host-preview-star">✳</div><h2>Room for a little surprise.</h2><p>Guests take a short quiz, then get one thoughtful introduction during the night.</p><div className="host-preview-list"><span>01 <b>A clear time and place</b></span><span>02 <b>Space to meet someone</b></span><span>03 <b>A host keeping an eye out</b></span></div><small>Matching and event operations are simulated in this prototype.</small></aside></div></HostShell>;
}
