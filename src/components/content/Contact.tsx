"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export default function Contact() {
  const [form, setForm]       = useState({ name: "", email: "", message: "" });
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    console.log("Sending with:", {
      service: EMAILJS_SERVICE_ID,
      template: EMAILJS_TEMPLATE_ID,
      key: EMAILJS_PUBLIC_KEY,
    });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
    } catch (err: any) {
      console.log("EmailJS error:", err);
      setError(`Gagal: ${err?.text || err?.message || JSON.stringify(err)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.cta}>
        <div className={styles.ctaLeft}>
          <div className={styles.label}>Mulai Proyek</div>
          <h2 className={styles.title}>Siap membangun<br />sesuatu bersama?</h2>
          <p className={styles.sub}>
            Ceritakan ide kamu dan kami akan bantu wujudkannya menjadi produk digital yang nyata.
          </p>
          <div className={styles.contact}>
            <a href="https://wa.me/6285716275034" className={styles.contactItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              WhatsApp
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
              <h3>Pesan terkirim!</h3>
              <p>Kami akan segera menghubungi kamu.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label>Nama</label>
                <input
                  type="text"
                  placeholder="Nama kamu"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className={styles.field}>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="email@kamu.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className={styles.field}>
                <label>Ceritakan proyekmu</label>
                <textarea
                  rows={4}
                  placeholder="Deskripsikan proyek atau pertanyaan kamu..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>

              {error && (
                <p style={{ color: "red", fontSize: "13px", marginTop: "-8px" }}>
                  {error}
                </p>
              )}

              <button type="submit" className={styles.submit} disabled={loading}>
                {loading ? "Mengirim..." : "Kirim Pesan"}
                {!loading && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}