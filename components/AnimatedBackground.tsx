const notes = [
  { glyph: "♪", top: "18%", left: "7%", size: "2.4rem", dur: "18s", delay: "0s" },
  { glyph: "♫", top: "36%", right: "9%", size: "3rem", dur: "24s", delay: "-8s" },
  { glyph: "♩", top: "62%", left: "13%", size: "2rem", dur: "21s", delay: "-4s" },
  { glyph: "♬", top: "78%", right: "18%", size: "2.6rem", dur: "27s", delay: "-13s" },
] as const;

export default function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
      <div className="light-pool light-pool-1" />
      <div className="light-pool light-pool-2" />
      {notes.map((note, i) => (
        <span
          key={i}
          className="note-float"
          style={{
            top: note.top,
            left: "left" in note ? note.left : undefined,
            right: "right" in note ? note.right : undefined,
            fontSize: note.size,
            ["--dur" as string]: note.dur,
            ["--delay" as string]: note.delay,
          }}
        >
          {note.glyph}
        </span>
      ))}
    </div>
  );
}
