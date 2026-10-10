"use client";

import { useState } from "react";
import { quizQuestions } from "@/lib/mock-data";
import { Button, DemoNote, Header, PageShell } from "@/components/ui";

export function QuizFlow() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const question = quizQuestions[step];
  const completed = step >= quizQuestions.length;
  const choose = (index: number) => {
    setAnswers((old) => [...old.slice(0, step), index]);
    setStep((old) => old + 1);
  };
  return <><Header back={`/e/afterglow-friday`} /><PageShell className="quiz-page"><div className="quiz-top"><span className="eyebrow">A LITTLE ABOUT YOUR VIBE</span><span className="quiz-time">◷ &nbsp;1 MIN</span></div>{!completed ? <><div className="progress-track"><span style={{ width: `${(step / quizQuestions.length) * 100}%` }} /></div><div className="question-meta">QUESTION {String(step + 1).padStart(2, "0")} <span>OF {quizQuestions.length}</span></div><h1 className="quiz-question">{question.prompt}</h1><div className="answer-list">{question.options.map((option, i) => <button key={option} className="answer-option" onClick={() => choose(i)}><span className="answer-letter">{String.fromCharCode(65 + i)}</span>{option}<span className="answer-arrow">↗</span></button>)}</div><div className="quiz-foot"><button className="text-button" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>← Previous</button><span>No wrong answers, ever.</span></div></> : <div className="quiz-complete"><span className="complete-icon">✳</span><span className="eyebrow">THAT'S YOUR SPARK</span><h1>You're in the mix.</h1><p>Nice. Your answers are saved in this demo. The big reveal happens when the room is ready.</p><Button href="/e/afterglow-friday/waiting">Head to the waiting room <span>→</span></Button><button className="text-button" onClick={() => setStep(0)}>Retake the quiz</button></div>}<DemoNote /></PageShell></>;
}
