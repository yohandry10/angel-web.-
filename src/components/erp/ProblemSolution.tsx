import React from "react";
import { Ic } from "./Icons";

const WEEKS = [
  [null, null, null, 1, 2, 3, 4],
  [5, 6, 7, 8, 9, 10, 11],
  [12, 13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30, 31, null],
];

const DOW = ["L", "M", "M", "J", "V", "S", "D"];

// Left calendar marks — messy
const LEFT_MARKS: Record<number, string> = {
  3: "err",          // error CPE
  6: "manual",       // doble dig
  9: "err",          // error
  12: "manual",
  14: "wait",
  15: "close-late",  // El cierre llega aquí
  17: "manual",
  20: "err",
  22: "wait",
  25: "manual",
  27: "wait",
  30: "wait",
  31: "err",
};

// Right calendar marks — automático, calm
const RIGHT_MARKS: Record<number, string> = {
  1: "auto",
  2: "close-early",  // Cierre listo el día 2
  3: "auto", 4: "auto", 5: "auto", 6: "auto", 7: "auto", 8: "auto",
  9: "auto", 10: "auto", 11: "auto", 12: "auto", 13: "auto", 14: "auto",
  15: "auto", 16: "auto", 17: "auto", 18: "auto", 19: "auto", 20: "auto",
  21: "auto", 22: "auto", 23: "auto", 24: "auto", 25: "auto", 26: "auto",
  27: "auto", 28: "auto", 29: "auto", 30: "auto", 31: "auto",
};

interface MonthCalendarProps {
  marks: Record<number, string>;
  variant: "old" | "konta";
}

function MonthCalendar({ marks, variant }: MonthCalendarProps) {
  return (
    <div
      className="rounded-[14px] overflow-hidden"
      style={{
        background: variant === "old" ? "var(--bg-soft)" : "var(--surface)",
        border: "1px solid var(--line)",
        boxShadow: variant === "konta" ? "0 30px 60px -30px rgba(42,168,255,0.18)" : "none",
      }}
    >
      {/* Header */}
      <div
        className="px-4 sm:px-5 py-3.5 border-b border-line flex items-center justify-between"
        style={{ background: variant === "old" ? "var(--bg)" : "var(--surface-2)" }}
      >
        <div className="flex items-center gap-2">
          {variant === "old" ? (
            <span className="inline-grid place-items-center w-5 h-5 rounded-full border border-line text-fg-4">
              <Ic.clock size={11} />
            </span>
          ) : (
            <span
              className="inline-grid place-items-center w-5 h-5 rounded-full"
              style={{
                background: "var(--accent-soft)",
                border: "1px solid color-mix(in oklab, var(--accent) 30%, transparent)",
              }}
            >
              <Ic.flash size={11} className="text-accent" />
            </span>
          )}
          <span className="text-[13px] font-semibold tracking-tight text-fg">Octubre 2026</span>
        </div>
        <span className={"text-[10.5px] font-mono uppercase tracking-[0.14em] " + (variant === "old" ? "text-fg-4" : "text-accent")}>
          {variant === "old" ? "ERP actual" : "Konta"}
        </span>
      </div>

      {/* DOW row */}
      <div className="grid grid-cols-7 gap-0 px-2 pt-2 pb-1">
        {DOW.map((d, i) => (
          <div key={i} className="text-[10px] font-mono uppercase text-fg-4 text-center py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Cells */}
      <div className="grid grid-cols-7 gap-0 px-2 pb-3">
        {WEEKS.flat().map((day, i) => {
          const m = day ? marks[day] : null;
          const isClose = m === "close-late" || m === "close-early";

          return (
            <div key={i} className="relative aspect-square p-1">
              {day && (
                <div
                  className={"absolute inset-0.5 rounded-md flex flex-col items-start justify-start p-1.5 " + (isClose ? "ring-1" : "")}
                  style={{
                    background:
                      m === "close-late"
                        ? "color-mix(in oklab, #fbbf24 14%, var(--surface))"
                        : m === "close-early"
                        ? "var(--accent-soft)"
                        : "transparent",
                    border:
                      "1px solid " +
                      (m === "close-late"
                        ? "color-mix(in oklab, #fbbf24 50%, transparent)"
                        : m === "close-early"
                        ? "color-mix(in oklab, var(--accent) 50%, transparent)"
                        : "var(--line-soft)"),
                    boxShadow:
                      m === "close-late"
                        ? "0 0 0 1px color-mix(in oklab, #fbbf24 30%, transparent) inset"
                        : m === "close-early"
                        ? "0 0 0 1px color-mix(in oklab, var(--accent) 30%, transparent) inset, 0 8px 24px -8px rgba(42,168,255,0.4)"
                        : "none",
                  }}
                >
                  <span
                    className={
                      "text-[10px] font-mono tnum " +
                      (m === "close-late" ? "text-fg" : m === "close-early" ? "text-fg" : m === "err" ? "text-fg-3" : "text-fg-3")
                    }
                  >
                    {day}
                  </span>

                  {/* Indicator */}
                  <div className="mt-auto flex items-center gap-0.5 w-full">
                    {m === "err" && (
                      <span
                        className="inline-flex w-2.5 h-2.5 rounded-full"
                        title="Error"
                        style={{ background: "color-mix(in oklab, #ef4444 60%, transparent)" }}
                      />
                    )}
                    {m === "manual" && (
                      <span
                        className="inline-flex w-2.5 h-2.5 rounded-full"
                        title="Manual"
                        style={{ background: "color-mix(in oklab, #fbbf24 50%, transparent)" }}
                      />
                    )}
                    {m === "wait" && (
                      <span className="inline-flex w-2 h-2 rounded-full opacity-60" title="Pendiente" style={{ background: "var(--text-4)" }} />
                    )}
                    {m === "auto" && (
                      <span className="relative inline-grid place-items-center w-1.5 h-1.5">
                        <span
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: "var(--accent)",
                            opacity: 0.4,
                            animation: "autoPulse 2.2s ease-in-out infinite",
                            animationDelay: `${(day * 73) % 1800}ms`,
                          }}
                        />
                        <span className="relative w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                      </span>
                    )}
                  </div>

                  {/* Cierre label */}
                  {m === "close-late" && (
                    <div
                      className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 h-4 rounded-full text-[8.5px] font-semibold uppercase tracking-wider whitespace-nowrap"
                      style={{ background: "#fbbf24", color: "#1c1300" }}
                    >
                      Cierre
                    </div>
                  )}
                  {m === "close-early" && (
                    <div
                      className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 h-4 rounded-full text-[8.5px] font-semibold uppercase tracking-wider whitespace-nowrap inline-flex items-center gap-0.5"
                      style={{ background: "var(--accent)", color: "#04101c" }}
                    >
                      <Ic.check size={8} />
                      Cierre
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer: legend + big number */}
      <div
        className="border-t border-line px-4 sm:px-5 py-3.5 flex items-center justify-between"
        style={{ background: variant === "old" ? "var(--bg)" : "var(--bg-soft)" }}
      >
        <div className="flex items-center gap-3 text-[10.5px]">
          {variant === "old" ? (
            <>
              <span className="inline-flex items-center gap-1 text-fg-3">
                <span className="w-2 h-2 rounded-full" style={{ background: "color-mix(in oklab, #ef4444 60%, transparent)" }} />
                Error
              </span>
              <span className="inline-flex items-center gap-1 text-fg-3">
                <span className="w-2 h-2 rounded-full" style={{ background: "color-mix(in oklab, #fbbf24 50%, transparent)" }} />
                Manual
              </span>
              <span className="inline-flex items-center gap-1 text-fg-3">
                <span className="w-2 h-2 rounded-full opacity-60" style={{ background: "var(--text-4)" }} />
                Pendiente
              </span>
            </>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-fg-3">
              <span className="relative inline-grid place-items-center w-2 h-2">
                <span
                  className="absolute inset-0 rounded-full"
                  style={{ background: "var(--accent)", opacity: 0.4, animation: "autoPulse 2.2s ease-in-out infinite" }}
                />
                <span className="relative w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
              </span>
              Eventos automáticos
            </span>
          )}
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className={"text-[20px] font-semibold tracking-[-0.025em] tnum " + (variant === "old" ? "text-fg" : "text-accent")}>
            {variant === "old" ? "Día 15" : "Día 2"}
          </span>
          <span className="text-[10.5px] text-fg-4">cierre contable</span>
        </div>
      </div>
    </div>
  );
}

export default function ProblemSolution() {
  const proofs = [
    { v: "13 días", l: "recuperados al mes" },
    { v: "0", l: "doble digitación SUNAT" },
    { v: "247ms", l: "venta → asiento" },
    { v: "100%", l: "uptime offline" },
  ];

  return (
    <section data-screen-label="03 El cambio" className="relative py-20 sm:py-28 border-t border-line overflow-hidden">
      <div aria-hidden className="absolute inset-0 dot-grid" style={{ opacity: 0.08 }} />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-[44rem]">
          <span className="kicker">El cambio</span>
          <h2 className="mt-4 text-[32px] sm:text-[44px] lg:text-[52px] font-semibold tracking-[-0.035em] leading-[1.04]">
            En tu ERP actual, el día 15 sigues esperando el cierre.
            <br />
            <span className="text-fg-3">En Konta, ya cerraste el día 2.</span>
          </h2>
        </div>

        {/* The visual */}
        <div className="mt-12 sm:mt-14 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 items-start">
            {/* LEFT — old ERP */}
            <div>
              <MonthCalendar marks={LEFT_MARKS} variant="old" />
              <div className="mt-4 flex items-start gap-2.5 max-w-[34ch] text-[13.5px] text-fg-3 leading-[1.5]">
                <span className="inline-grid place-items-center w-4 h-4 rounded-full border border-line shrink-0 mt-0.5">
                  <Ic.x size={9} className="text-fg-4" />
                </span>
                <span>
                  Esperas a fin de mes para cuadrar. Doble digitación con SUNAT, conciliaciones manuales, y siempre algún CPE en error.
                </span>
              </div>
            </div>

            {/* RIGHT — Konta */}
            <div>
              <MonthCalendar marks={RIGHT_MARKS} variant="konta" />
              <div className="mt-4 flex items-start gap-2.5 max-w-[34ch] text-[13.5px] text-fg-2 leading-[1.5]">
                <span
                  className="inline-grid place-items-center w-4 h-4 rounded-full shrink-0 mt-0.5"
                  style={{
                    background: "var(--accent-soft)",
                    border: "1px solid color-mix(in oklab, var(--accent) 30%, transparent)",
                  }}
                >
                  <Ic.check size={9} className="text-accent" />
                </span>
                <span>Each operation emits an event that updates accounting and SUNAT. The close comes ready, it isn&apos;t chased.</span>
              </div>
            </div>
          </div>

          {/* Divider arrow — centered between calendars (desktop) */}
          <div aria-hidden className="hidden md:flex absolute left-1/2 -translate-x-1/2 pointer-events-none z-10" style={{ top: "calc(50% - 28px)" }}>
            <div
              className="inline-grid place-items-center w-11 h-11 rounded-full"
              style={{ background: "var(--bg)", border: "1px solid var(--line)", boxShadow: "0 6px 20px -8px rgba(42,168,255,0.35)" }}
            >
              <Ic.arrowR size={16} className="text-accent" />
            </div>
          </div>
        </div>

        {/* Proof strip */}
        <div className="mt-14 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 border-t border-l border-line">
          {proofs.map((p, i) => (
            <div key={i} className="border-r border-b border-line px-5 sm:px-7 py-6 sm:py-7" style={{ background: "var(--surface)" }}>
              <div className="text-[28px] sm:text-[34px] font-semibold tracking-[-0.03em] tnum leading-none text-fg">{p.v}</div>
              <div className="mt-2 text-[12px] text-fg-3 uppercase tracking-[0.08em] font-medium">{p.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
