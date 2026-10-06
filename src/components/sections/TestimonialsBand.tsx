"use client";

import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  work?: string;
  photo?: string;
  placeholder?: boolean;
};

// ADD / EDIT TESTIMONIALS HERE ONLY.
// Real ones: set placeholder to false (or delete the field) and paste the client's approved words.
const TESTIMONIALS: Testimonial[] = [
  // Based on Anas's feedback as relayed by Sawera.
  {
    quote:
      "Sawera guided us through our branding and GTM engineering from the start. As a startup, we needed that direction, and she gave it. We now know how to take our brand further on our own.",
    name: "Anas",
    role: "CEO, Innovrah",
    work: "Branding & GTM Engineering",
    photo: "",
    placeholder: false,
  },
  {
    quote:
      "Sawera automated our systems, showed us how to generate leads, and helped us manage our website. She took care of the work that was slowing us down.",
    name: "Bohman",
    role: "Client, Europe",
    work: "Business Automation",
    photo: "",
    placeholder: false,
  },
  {
    quote:
      "Our content strategy was weak. Sawera added real value: she identified our target audience, built the strategies, and automated the whole system.",
    name: "Davis",
    role: "Client, UK",
    work: "AI Content, Marketing & Lead Generation",
    photo: "",
    placeholder: false,
  },
];

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TestimonialsBand() {
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    const syncPreview = () =>
      setPreview(window.location.hash === "#preview-testimonials");
    syncPreview();
    window.addEventListener("hashchange", syncPreview);
    return () => window.removeEventListener("hashchange", syncPreview);
  }, []);

  const real = TESTIMONIALS.filter((t) => !t.placeholder);
  // Hide the whole section until at least one real testimonial exists.
  // Preview locally with placeholders by opening the page with #preview-testimonials
  const list = real.length ? real : preview ? TESTIMONIALS : [];

  if (list.length === 0) return null;

  return (
    <section
      id="testimonials"
      className="tm-section"
      aria-labelledby="tm-title"
    >
      <div className="tm-wrap">
        <p className="tm-eyebrow">Proof</p>
        <h2 id="tm-title" className="tm-title">
          What people say
        </h2>
        <p className="tm-sub">Feedback from people I&apos;ve worked with.</p>
        <div id="tm-grid" className="tm-grid" aria-label="Client testimonials">
          {list.map((item, index) => (
            <figure className="tm-card" key={`${item.name}-${index}`}>
              {item.work && <div className="tm-work">{item.work}</div>}
              <blockquote className="tm-quote">{item.quote}</blockquote>
              <figcaption className="tm-person">
                {item.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="tm-avatar"
                    src={item.photo}
                    alt={item.name}
                  />
                ) : (
                  <span className="tm-avatar" aria-hidden="true">
                    {getInitials(item.name)}
                  </span>
                )}
                <div>
                  <div className="tm-name">{item.name}</div>
                  <div className="tm-role">{item.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
