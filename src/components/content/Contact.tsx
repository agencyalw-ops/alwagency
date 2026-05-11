"use client";
import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waMsg = encodeURIComponent(
      `Hello Alw Agency!\n\nName: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nService: ${form.service}\nBudget: ${form.budget}\n\nMessage:\n${form.message}`
    );
    window.open(`https://wa.me/6285716275034?text=${waMsg}`, "_blank");
    setSent(true);
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.cta}>
        <div className={styles.ctaLeft}>
          <div className={styles.label}>Start a Project</div>
          <h2 className={styles.title}>Let&apos;s build<br /><em>something great</em></h2>
          <p className={styles.sub}>
            Tell us about your project. We&apos;ll get back to you within 24 hours with
            honest advice — whether or not we&apos;re the right fit.
          </p>
          <div className={styles.contact}>
            <a href="https://wa.me/6285716275034" className={styles.contactItem} target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              WhatsApp — fastest response
            </a>
            <a href="mailto:hello@agencyalw.com" className={styles.contactItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              hello@agencyalw.com
            </a>
          </div>
        </div>

        <div className={styles.formWrap}>
          {sent ? (
            <div className={styles.thanks}>
              <div className={styles.checkmark}>✓</div>
              <h3>Message sent!</h3>
              <p>We&apos;ve opened WhatsApp with your details. We reply within 24 hours.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label>Your name</label>
                  <input type="text" placeholder="Jane Smith" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div className={styles.field}>
                  <label>Email address</label>
                  <input type="email" placeholder="jane@company.com" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                </div>
              </div>

              <div className={styles.field}>
                <label>Company / business name</label>
                <input type="text" placeholder="Acme Co." value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })} />
              </div>

              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label>Service needed</label>
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                    <option value="">Select a service</option>
                    <option>Company Profile Website</option>
                    <option>E-Commerce Store</option>
                    <option>Internal Business System</option>
                    <option>Landing Page / Funnel</option>
                    <option>SaaS MVP</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label>Budget range</label>
                  <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}>
                    <option value="">Select budget</option>
                    <option>Under $500</option>
                    <option>$500 – $1,500</option>
                    <option>$1,500 – $5,000</option>
                    <option>$5,000+</option>
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label>Tell us about your project</label>
                <textarea rows={4}
                  placeholder="What are you building? What problem does it solve? Any deadline?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })} required />
              </div>

              <button type="submit" className={styles.submit}>
                Send via WhatsApp →
              </button>
              <p style={{ fontSize: "12px", opacity: 0.5, textAlign: "center", marginTop: "8px" }}>
                Your details will be sent via WhatsApp. We reply within 24 hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
