"use client";

import { useState } from "react";

const interests = [
  "Public gym access",
  "Private coaching",
  "Competition prep",
  "Nutrition or meal guidance",
  "Tour both locations"
];

const goals = [
  "Lose body fat",
  "Build muscle",
  "Get stronger",
  "Improve consistency",
  "Competition or stage prep",
  "Better health and energy"
];

const timelines = ["Immediately", "This week", "This month", "Still exploring"];

export function ConsultationForm() {
  const [interest, setInterest] = useState(interests[0]);

  const isPrivate = interest === "Private coaching" || interest === "Competition prep";
  const isPublic = interest === "Public gym access" || interest === "Tour both locations";
  const isNutrition = interest === "Nutrition or meal guidance";

  return (
    <div className="site-form-shell">
      <form
        className="site-card site-form"
        action="mailto:a2fgym@gmail.com"
        method="post"
        encType="text/plain"
      >
        <div>
          <p className="site-eyebrow">Quick Intake</p>
          <h2 className="site-card-title">Build the right path.</h2>
          <p className="site-copy">
            This form opens your email app with the details included, so the A2F
            team can follow up directly.
          </p>
        </div>

        <label className="site-field">
          What are you interested in?
          <select
            className="site-input"
            name="interest"
            value={interest}
            onChange={(event) => setInterest(event.target.value)}
          >
            {interests.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="site-field">
          Primary goal
          <select className="site-input" name="primary goal" defaultValue="">
            <option value="" disabled>
              Select a goal
            </option>
            {goals.map((goal) => (
              <option key={goal}>{goal}</option>
            ))}
          </select>
        </label>

        <label className="site-field">
          Timeline
          <select className="site-input" name="timeline" defaultValue="">
            <option value="" disabled>
              Select timeline
            </option>
            {timelines.map((timeline) => (
              <option key={timeline}>{timeline}</option>
            ))}
          </select>
        </label>

        {isPublic ? (
          <>
            <label className="site-field">
              Are you interested in a day pass, monthly access, or annual access?
              <select className="site-input" name="public gym access interest" defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                <option>Day pass</option>
                <option>Monthly access</option>
                <option>Annual paid-in-full</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label className="site-field">
              Best time to train
              <input className="site-input" name="best training time" placeholder="Morning, afternoon, evening, flexible..." />
            </label>
          </>
        ) : null}

        {isPrivate ? (
          <>
            <label className="site-field">
              Coaching level
              <select className="site-input" name="coaching level" defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                <option>One-on-one training</option>
                <option>Semi-private training</option>
                <option>Competition prep</option>
                <option>Online coaching</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label className="site-field">
              Current training experience
              <textarea
                className="site-input"
                name="current training experience"
                placeholder="Tell us what you are currently doing and where you want support."
              />
            </label>
          </>
        ) : null}

        {isNutrition ? (
          <label className="site-field">
            What kind of nutrition support are you looking for?
            <textarea
              className="site-input"
              name="nutrition support"
              placeholder="Meal structure, accountability, prep guidance, body composition, etc."
            />
          </label>
        ) : null}

        <div className="site-grid-2">
          <label className="site-field">
            Name
            <input className="site-input" name="name" placeholder="Your name" />
          </label>
          <label className="site-field">
            Phone or email
            <input className="site-input" name="contact" placeholder="Best way to reach you" />
          </label>
        </div>

        <label className="site-field">
          Anything else A2F should know?
          <textarea
            className="site-input"
            name="message"
            placeholder="Injuries, schedule, goals, questions, or preferred location..."
          />
        </label>

        <button className="site-button site-button-primary" type="submit">
          Send Consultation Request
        </button>
      </form>
    </div>
  );
}
