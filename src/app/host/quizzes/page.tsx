import Link from "next/link";
import { HostPageHeading, HostShell } from "@/components/host-shell";
import { Button } from "@/components/ui";
import { quizTemplates } from "@/lib/host-quizzes";

export default function HostQuizLibraryPage() {
  return <HostShell active="quizzes"><HostPageHeading eyebrow="HOST WORKSPACE · QUESTION LIBRARY" title={<>A few good questions go a long way<span className="pink-dot">.</span></>} description="Browse quiz templates, mix in the sets that suit your night, and choose individual questions during event setup." action={<Button href="/host/events/new">Choose for an event <span>→</span></Button>}/>
    <div className="host-quiz-library-intro"><span>✳</span><p>Every template is designed to keep the quiz short, comfortable, and focused on conversation. Hosts choose a template, include or skip sets, and can toggle questions before creating the event.</p></div>
    <section className="host-library-grid" aria-label="Available quiz templates">{quizTemplates.map((template, index) => <article className="host-library-card" key={template.id}><div className={`host-library-art library-art-${index + 1}`}><span>0{index + 1} · SPARK QUIZ</span><b>{template.name}</b><small>{template.duration}</small></div><div className="host-library-content"><p>{template.description}</p><div className="host-library-sets">{template.sets.map((set) => <details key={set.id}><summary><span>{set.name}</span><small>{set.questions.length} questions</small></summary><ul>{set.questions.map((question) => <li key={question}>{question}</li>)}</ul></details>)}</div><Link className="host-text-link" href={`/host/events/new?quiz=${template.id}`}>Choose this template →</Link></div></article>)}</section>
    <div className="host-footnote">✳ &nbsp;Question templates are sample content. The selected event quiz is not saved in this prototype.</div>
  </HostShell>;
}
