const items = [
  "Next.js", "✦", "TypeScript", "✦", "React", "✦",
  "Product UI", "✦", "Web Apps", "✦", "API Integrations", "✦",
  "Database Systems", "✦", "Responsive Design", "✦", "Next.js", "✦",
  "TypeScript", "✦", "React", "✦", "Product UI", "✦",
  "Web Apps", "✦", "API Integrations", "✦", "Database Systems", "✦", "Responsive Design", "✦",
];

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className={item === "✦" ? "marquee-star" : "marquee-item"}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
