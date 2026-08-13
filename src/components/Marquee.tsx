const items = [
  "Web Development", "✦", "UI/UX Design", "✦", "E-Commerce", "✦",
  "Company Profile", "✦", "Business Systems", "✦", "Landing Pages", "✦",
  "SaaS MVPs", "✦", "Digital Products", "✦", "Web Development", "✦",
  "UI/UX Design", "✦", "E-Commerce", "✦", "Company Profile", "✦",
  "Business Systems", "✦", "Landing Pages", "✦", "SaaS MVPs", "✦", "Digital Products", "✦",
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
