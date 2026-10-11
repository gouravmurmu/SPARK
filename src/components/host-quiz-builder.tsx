"use client";

import { useState } from "react";
import { quizTemplates } from "@/lib/host-quizzes";

export function HostQuizBuilder({ initialTemplateId }: { initialTemplateId?: string }) {
  const initialTemplate = quizTemplates.find((item) => item.id === initialTemplateId) ?? quizTemplates[0];
  const [templateId, setTemplateId] = useState<string>(initialTemplate.id);
  const [openSetId, setOpenSetId] = useState<string | null>(initialTemplate.sets[0].id);
  const [enabledSets, setEnabledSets] = useState<string[]>([initialTemplate.sets[0].id]);
  const [enabledQuestions, setEnabledQuestions] = useState<string[]>([...initialTemplate.sets[0].questions]);
  const template = quizTemplates.find((item) => item.id === templateId) ?? quizTemplates[0];

  function chooseTemplate(id: string) {
    const next = quizTemplates.find((item) => item.id === id) ?? quizTemplates[0];
    const firstSet = next.sets[0];
    setTemplateId(id);
    setOpenSetId(firstSet.id);
    setEnabledSets([firstSet.id]);
    setEnabledQuestions([...firstSet.questions]);
  }

  function toggleSet(setId: string, questions: readonly string[]) {
    setEnabledSets((current) => current.includes(setId) ? current.filter((id) => id !== setId) : [...current, setId]);
    setEnabledQuestions((current) => {
      const allSelected = questions.every((question) => current.includes(question));
      return allSelected ? current.filter((question) => !questions.includes(question)) : [...new Set([...current, ...questions])];
    });
  }

  function toggleQuestion(question: string, setId: string) {
    setEnabledQuestions((current) => current.includes(question) ? current.filter((item) => item !== question) : [...current, question]);
    setEnabledSets((current) => current.includes(setId) ? current : [...current, setId]);
  }

  return <section className="host-quiz-builder" aria-labelledby="quiz-builder-title">
    <div className="host-card-heading"><div><span className="eyebrow">QUIZ LIBRARY</span><h2 id="quiz-builder-title">Choose your questions.</h2></div><span className="host-step">{enabledQuestions.length} SELECTED</span></div>
    <p className="host-quiz-intro">Start with a template, include the sets that fit your event, and uncheck any question you’d like to skip.</p>
    <div className="host-template-grid" role="radiogroup" aria-label="Quiz templates">{quizTemplates.map((item) => <button type="button" key={item.id} role="radio" aria-checked={templateId === item.id} className={`host-template-option ${templateId === item.id ? "selected" : ""}`} onClick={() => chooseTemplate(item.id)}><span className="host-template-check">{templateId === item.id ? "✓" : ""}</span><b>{item.name}</b><small>{item.description}</small><i>{item.duration}</i></button>)}</div>
    <div className="host-question-sets"><div className="host-set-list">{template.sets.map((set) => {
      const selected = enabledSets.includes(set.id);
      return <article className={`host-set ${selected ? "enabled" : ""}`} key={set.id}><div className="host-set-row"><label><input type="checkbox" checked={selected} onChange={() => toggleSet(set.id, set.questions)}/><span><b>{set.name}</b><small>{set.questions.length} questions</small></span></label><button type="button" className="host-expand-button" aria-expanded={openSetId === set.id} onClick={() => setOpenSetId(openSetId === set.id ? null : set.id)}>{openSetId === set.id ? "Hide" : "Preview"} <span>{openSetId === set.id ? "−" : "+"}</span></button></div>{openSetId === set.id && <div className="host-question-list">{set.questions.map((question, index) => <label key={question}><input type="checkbox" checked={enabledQuestions.includes(question)} onChange={() => toggleQuestion(question, set.id)}/><span><i>Q{index + 1}</i>{question}</span></label>)}</div>}</article>;
    })}</div></div>
    <p className="host-quiz-note" role="status">✳ &nbsp;{template.name} · {enabledSets.length} {enabledSets.length === 1 ? "set" : "sets"} · {enabledQuestions.length} {enabledQuestions.length === 1 ? "question" : "questions"} selected for this preview.</p>
  </section>;
}
