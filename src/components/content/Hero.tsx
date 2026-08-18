import Link from "next/link"

const cards = [
  { title: "Kopi Kledang", big: true, image: "/portfolio/caffe.webp" },
  { title: "Combucha Tea", big: false, image: "/portfolio/combucha-tea.webp" },
  { title: "Bold Blue Photography", big: false, image: "/portfolio/bold-blue-photography.webp" },
  { title: "Mounti", big: true, image: "/portfolio/mounti.webp" },
]

export default function Hero() {
  return (
    <section className="hero-hero">
      <div className="hero-inner">
        <p className="hero-eyebrow">Behind the Designs</p>
        <h1 className="hero-heading">Curious What Else<br />We&apos;ve Created?</h1>
        <p className="hero-sub">
          Explore a wide range of selected work — websites, digital products,
          and systems built for SMBs worldwide.
        </p>

        <Link href="/portfolio" className="hero-arrow-link">
          See more Projects
          <span className="hero-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </Link>

        <div className="hero-fan-wrap">
          <div className="hero-fan">
            {cards.map((c, i) => (
              <div
                key={c.title}
                title={c.title}
                className={`hero-fan-card hero-fan-card-${i}${c.big ? " hero-fan-card-big" : ""}`}
                style={{ backgroundImage: `url('${c.image}')` }}
              />
            ))}
          </div>
        </div>

        <div className="hero-steps">
          <div className="hero-step"><span>01</span> Strategy &amp; Planning</div>
          <div className="hero-step"><span>02</span> Design &amp; Development</div>
          <div className="hero-step"><span>03</span> Launch &amp; Growth</div>
          <div className="hero-step"><span>04</span> Ongoing Support</div>
        </div>
      </div>
    </section>
  )
}
