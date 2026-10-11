"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { HostQuizBuilder } from "@/components/host-quiz-builder";

export function HostEventForm({ initialQuiz }: { initialQuiz?: string }) {
  const router = useRouter();
  const [message, setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Preview event created for this session. No data was saved.");
    window.setTimeout(() => router.push("/host/events/afterglow-friday"), 900);
  }
  return <form className="host-form" onSubmit={submit}>
    <div className="host-form-grid"><label className="host-field host-field-wide">Event name<input required name="name" placeholder="e.g. Afterglow Friday" maxLength={60}/><small>This name appears on the invite and guest page.</small></label>
      <label className="host-field">Venue<input required name="venue" placeholder="Venue name and city" maxLength={100}/></label><label className="host-field">Guest capacity<input required name="capacity" type="number" min="4" max="500" defaultValue="60"/><small>Minimum 4 guests</small></label>
      <label className="host-field">Event date<input required name="date" type="date" defaultValue="2026-10-24"/></label><label className="host-field">Doors open<input required name="doors" type="time" defaultValue="21:00"/></label>
      <label className="host-field">Registration closes<input required name="cutoff" type="time" defaultValue="20:30"/><small>Set before doors open</small></label><label className="host-field">Reveal time<input required name="reveal" type="time" defaultValue="22:30"/><small>After registration closes</small></label>
    </div>
    <fieldset className="host-fieldset"><legend>What kind of night is it?</legend><p>Choose a few cues to help guests know what to expect.</p><div className="host-chips"><label><input type="checkbox" defaultChecked/> Easy conversation</label><label><input type="checkbox"/> Dance floor</label><label><input type="checkbox" defaultChecked/> Meet someone new</label><label><input type="checkbox"/> Low-key hangout</label></div></fieldset>
    <div className="host-required-note"><span>18+</span><p>SPARK events are for adults. You’ll confirm that every guest is 18 or older when you share the invite.</p></div>
    <HostQuizBuilder initialTemplateId={initialQuiz}/>
    <label className="host-terms"><input type="checkbox" required/><span>I agree to follow the <a href="/guidelines">SPARK community guidelines</a> and review safety reports during my event.</span></label>
    {message && <p className="host-form-message" role="status">{message}</p>}
    <div className="host-form-actions"><button className="button button-primary" type="submit">Create preview event <span>→</span></button><span>Preview only · your event won’t be saved</span></div>
  </form>;
}
