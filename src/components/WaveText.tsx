/** Splits text into letters that gently rise and settle one after another. */
export function WaveText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <span key={i} aria-hidden="true" className="wave-letter" style={{ animationDelay: `${i * 0.08}s` }}>
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}
