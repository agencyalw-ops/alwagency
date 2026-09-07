import { siteContent } from "@/lib/content";

const items = [...siteContent.marquee, ...siteContent.marquee];

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
