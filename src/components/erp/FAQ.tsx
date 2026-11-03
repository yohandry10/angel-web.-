import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { FAQ_ITEMS } from "./faq-data";
import { DEMO_WA_URL } from "@/lib/erp-contact";

const TOPICS = [
  { name: "Operación diaria", items: [3, 4, 5] },
  { name: "Contabilidad y SUNAT", items: [0, 1, 2] },
  { name: "Implementación", items: [6, 7, 8] },
];

export default function FAQ() {
  const [topic, setTopic] = useState(0);
  const [open, setOpen] = useState<number | null>(3);
  return (
    <section id="faq" className="erp-faq-section" aria-labelledby="erp-faq-title">
      <div className="erp-section-shell">
        <div className="erp-faq-heading" data-reveal="group">
          <h2 id="erp-faq-title">
            Resolvemos
            <br />
            <span>tus preguntas.</span>
          </h2>
          <p>Lo que necesitas saber para llevar tu operación a NEXTELCO ERP.</p>
        </div>
        <div
          className="erp-faq-topics"
          role="group"
          aria-label="Temas de las preguntas"
          data-reveal
        >
          {TOPICS.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-pressed={topic === index}
              aria-controls="erp-faq-list"
              onClick={() => {
                setTopic(index);
                setOpen(item.items[0]);
              }}
            >
              {item.name}
              <span>{item.items.length}</span>
            </button>
          ))}
        </div>
        <div id="erp-faq-list" className="erp-faq-list" data-reveal>
          {TOPICS[topic].items.map((index) => {
            const item = FAQ_ITEMS[index];
            const expanded = open === index;
            return (
              <div className="erp-faq-item" key={item.q}>
                <h3>
                  <button
                    type="button"
                    id={`erp-faq-question-${index}`}
                    aria-expanded={expanded}
                    aria-controls={`erp-faq-answer-${index}`}
                    onClick={() => setOpen(expanded ? null : index)}
                  >
                    <span>{item.q}</span>
                    <Plus size={20} aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className="erp-faq-answer"
                  id={`erp-faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`erp-faq-question-${index}`}
                  hidden={!expanded}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="erp-faq-contact" data-reveal>
          <p>¿Tu operación necesita algo más específico?</p>
          <a href={DEMO_WA_URL} target="_blank" rel="noopener noreferrer">
            Lo vemos en una demo <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
