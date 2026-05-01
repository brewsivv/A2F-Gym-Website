import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact A2F Gym for private coaching, public gym access, day passes, tours, and fitness questions in Rancho Cucamonga.",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Contact A2F Gym",
    description:
      "Reach A2F Gym for public access, day passes, private coaching, tours, and fitness questions.",
    url: "/contact"
  }
};

const privateGymMapUrl =
  "https://www.google.com/maps/search/?api=1&query=9542%20Foothill%20Blvd%2C%20Rancho%20Cucamonga%2C%20CA%2091730";

const publicGymMapUrl =
  "https://www.google.com/maps/search/?api=1&query=11650%20Mission%20Park%20Dr%20Ste%20114%2C%20Rancho%20Cucamonga%2C%20CA%2091730";

export default function ContactPage() {
  return (
    <main className="site-page">
      <section className="site-hero">
        <div className="site-container site-grid-2">
          <div>
            <p className="site-eyebrow">Contact A2F</p>
            <h1 className="site-display">Start with the right next step.</h1>
          </div>
          <div>
            <p className="site-lead">
              Reach out for public gym access, day passes, tours, private
              coaching, competition prep, or nutrition guidance. A2F will help
              point you toward the right location and training path.
            </p>
            <div className="site-button-row">
              <a className="site-button site-button-primary" href="/book-consultation">
                Book Consultation
              </a>
              <a className="site-button site-button-ghost" href="tel:19099217220">
                Call 1-909-921-7220
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container site-grid-2">
          <article className="site-card">
            <p className="site-eyebrow">Quick Inquiry</p>
            <h2 className="site-card-title">Tell us what you need.</h2>
            <form
              action="mailto:a2fgym@gmail.com"
              method="post"
              encType="text/plain"
              className="site-form"
            >
              <label className="site-field">
                I am interested in
                <select name="interest" defaultValue="" className="site-input">
                  <option value="" disabled>
                    Select a path
                  </option>
                  <option>Public gym access</option>
                  <option>Private coaching</option>
                  <option>Competition prep</option>
                  <option>Nutrition or meal guidance</option>
                  <option>Tour both locations</option>
                </select>
              </label>
              <label className="site-field">
                Name
                <input name="name" placeholder="Your name" className="site-input" />
              </label>
              <label className="site-field">
                Phone or email
                <input name="contact" placeholder="How should we reach you?" className="site-input" />
              </label>
              <label className="site-field">
                Message
                <textarea
                  name="message"
                  placeholder="Tell us your goal or what you want to ask..."
                  className="site-input"
                />
              </label>
              <button className="site-button site-button-primary" type="submit">
                Send Inquiry
              </button>
            </form>
          </article>

          <aside className="site-card site-card-compact">
            <p className="site-eyebrow">A2F Gym</p>
            <h2 className="site-mini-title">Locations and direct contact</h2>
            <div className="site-info-list">
              <div className="site-info-item">
                <span className="site-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path
                      d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="site-mini-title">Private Gym</h3>
                  <p className="site-copy">9542 Foothill Blvd, Rancho Cucamonga, CA 91730</p>
                  <a className="site-info-link" href={privateGymMapUrl} target="_blank" rel="noreferrer">
                    Open in Maps
                  </a>
                </div>
              </div>
              <div className="site-info-item">
                <span className="site-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path
                      d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="site-mini-title">Public Gym</h3>
                  <p className="site-copy">11650 Mission Park Dr, Ste 114, Rancho Cucamonga, CA 91730</p>
                  <p className="site-copy">Hours: 4:00 AM - 10:00 PM</p>
                  <a className="site-info-link" href={publicGymMapUrl} target="_blank" rel="noreferrer">
                    Open in Maps
                  </a>
                </div>
              </div>
              <div className="site-info-item">
                <span className="site-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path
                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.11.37 2.31.56 3.58.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.27.19 2.47.56 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="site-mini-title">Direct Contact</h3>
                  <p className="site-copy">
                    <a href="tel:19099217220">1-909-921-7220</a>
                    <br />
                    <a href="mailto:a2fgym@gmail.com">a2fgym@gmail.com</a>
                  </p>
                  <a className="site-info-link" href="/book-consultation">
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
