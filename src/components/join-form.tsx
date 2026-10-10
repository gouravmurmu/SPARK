"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";

export function JoinForm({ slug, spotsLeft }: { slug: string; spotsLeft: number }) {
  const router = useRouter();
  const [message, setMessage] = useState("");
  function submit(formData: FormData) {
    const nickname = String(formData.get("nickname") ?? "").trim();
    if (!nickname) { setMessage("Add a nickname to continue."); return; }
    if (formData.get("adult") !== "on") { setMessage("Please confirm that you are 18 or older."); return; }
    if (formData.get("matching") !== "on") { setMessage("Please confirm that you want to be considered for a match."); return; }
    setMessage("");
    router.push(`/e/${slug}/quiz`);
  }
  return <form className="join-card" action={submit}>
    <div className="join-top"><span><i/> REGISTRATION OPEN</span><b>{spotsLeft} spots left</b></div>
    <label htmlFor="nickname">WHAT SHOULD WE CALL YOU?</label><input id="nickname" name="nickname" placeholder="Your nickname" maxLength={24} required autoComplete="nickname"/>
    <div className="join-check"><input id="age" name="adult" type="checkbox" required/><label htmlFor="age">I'm 18 or older and agree to the <a href="/guidelines">community guidelines</a>.</label></div>
    <div className="join-check"><input id="consent" name="matching" type="checkbox" required/><label htmlFor="consent">I'm okay being considered for one event match.</label></div>
    {message && <p className="form-message" role="alert">{message}</p>}
    <Button type="submit" className="full-button">Join the night <span>↗</span></Button>
    <small className="join-foot">Nickname only. No profile, photos, or public directory.</small>
  </form>;
}
