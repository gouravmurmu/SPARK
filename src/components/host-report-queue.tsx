"use client";

import { useState } from "react";

const reports = [
  { id: "R-104", type: "Uncomfortable interaction", time: "8:42 PM", status: "NEW", description: "A guest reported repeated unwanted attention during the event. The report is redacted in this preview." },
  { id: "R-103", type: "Guest needs support", time: "8:18 PM", status: "NEW", description: "A guest asked the host team for help finding a quiet place. No private messages or quiz answers are shown." },
];

export function HostReportQueue() {
  const [handled, setHandled] = useState<string[]>([]);
  const [notice, setNotice] = useState("");
  function markHandled(id: string) {
    setHandled((current) => [...current, id]);
    setNotice(`${id} marked reviewed for this preview. Nothing was saved.`);
  }
  return <><div className="host-report-list">{reports.map((report) => {
    const isHandled = handled.includes(report.id);
    return <article className="host-report" key={report.id}><div className="host-report-head"><span className="host-report-icon">♡</span><div><span className="host-report-type">{report.type}</span><small>{report.id} · {report.time}</small></div><span className={`host-report-status ${isHandled ? "resolved" : ""}`}>{isHandled ? "REVIEWED" : report.status}</span></div><p>{report.description}</p><div className="host-report-actions"><button className="host-text-button" onClick={() => markHandled(report.id)} disabled={isHandled}>{isHandled ? "Reviewed" : "Mark reviewed"}</button><button className="host-text-button host-remove-button" onClick={() => setNotice("Participant removal is only a preview action. No guest was removed.")}>Remove participant</button></div></article>;
  })}</div>{notice && <p className="host-action-notice" role="status">{notice}</p>}<div className="host-privacy-note"><span>⌑</span><div><b>Privacy by design</b><p>Reports contain only the information needed to act. Quiz answers, match graphs, and private conversations are never shown here.</p></div></div></>;
}
