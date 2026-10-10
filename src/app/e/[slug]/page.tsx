import { notFound } from "next/navigation";
import { DemoNote, Header, PageShell } from "@/components/ui";
import { JoinForm } from "@/components/join-form";
import { event } from "@/lib/mock-data";

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug !== event.slug) notFound();
  return <><Header back="/"/><PageShell className="event-page"><div className="event-cover"><div className="cover-orb"/><span className="event-label">✳ &nbsp;A SPARK NIGHT</span><span className="cover-word">AFTER<span>GLOW</span></span><span className="cover-date">FRIDAY · OCT 24 · NEW YORK</span><span className="cover-side-note">SOMEWHERE NOWHERE<br/>9PM TILL LATE</span></div><section className="event-intro"><span className="eyebrow">THE ROOM IS OPEN</span><h1>Good music.<br/><em>Better chemistry.</em></h1><p>One night, one room, a whole lot of possibility. Answer a few quick questions, then meet your one thoughtful match when the night is ready.</p><div className="event-facts"><div><span>⌖</span><b>Somewhere Nowhere</b><small>New York, NY</small></div><div><span>◷</span><b>Friday, October 24</b><small>Doors at 9 PM</small></div></div><JoinForm slug={slug} spotsLeft={event.spotsLeft}/><div className="event-safe"><span>♧</span><p>Your quiz stays private. You choose if a match becomes a connection.</p></div></section><DemoNote/></PageShell></>;
}
