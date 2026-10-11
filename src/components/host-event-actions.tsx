"use client";

import { useState } from "react";

export function HostEventActions() {
  const [notice, setNotice] = useState("");
  return <><div className="host-action-buttons"><button className="button button-secondary" onClick={() => setNotice("Reveal time updated in this preview. It won’t be saved.")}>Reschedule reveal</button><button className="button button-quiet" onClick={() => setNotice("Registration is still open in this demo.")}>Close registration</button></div>{notice && <p className="host-action-notice" role="status">{notice}</p>}</>;
}
