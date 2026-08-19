"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { WEDDING_CONTENT } from "@/src/data/constants";
import cocktailImage from "./Cocktail.jpeg";
import haldiImage from "./haldi.jpeg";
import mehendiImage from "./mehendi.jpeg";
import pelliKuthuruImage from "./Pelli Kuthuru 3.jpeg";
import pelliImage from "./Pelli .jpeg";

const LOCAL_EVENT_MEDIA = {
  "cocktail-image": cocktailImage.src,
  "haldi-image": haldiImage.src,
  "mehendi-image": mehendiImage.src,
  "pelli-kuthuru-image": pelliKuthuruImage.src,
  "pelli-image": pelliImage.src
};

function calculateTimeLeft(targetDate) {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / 1000 / 60) % 60),
    seconds: Math.floor((distance / 1000) % 60)
  };
}

function Countdown({ content }) {
  const target = useMemo(() => new Date(content.weddingDateISO).getTime(), [content.weddingDateISO]);
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(target));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft(target)), 1000);
    return () => clearInterval(timer);
  }, [target]);

  const displayItems = [
    { key: "days", value: timeLeft.days, label: content.unitLabels.days },
    { key: "hours", value: timeLeft.hours, label: content.unitLabels.hours },
    { key: "minutes", value: timeLeft.minutes, label: content.unitLabels.minutes },
    { key: "seconds", value: timeLeft.seconds, label: content.unitLabels.seconds }
  ];

  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {displayItems.map((item) => (
        <div
          key={item.key}
          className="rounded-2xl border border-white/60 bg-white/35 p-4 text-center shadow-md"
        >
          <p className="text-2xl font-semibold text-[var(--text-heading)] sm:text-3xl">
            {String(item.value).padStart(2, "0")}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--text-body)]">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

function EventMedia({ media }) {
  const [isMediaBroken, setIsMediaBroken] = useState(false);
  const resolvedSrc = media?.src ? LOCAL_EVENT_MEDIA[media.src] || media.src : "";

  if (media.type === "placeholder") {
    return (
      <div className="relative mx-auto h-[26rem] w-full max-w-[16rem] overflow-hidden rounded-2xl sm:h-[30rem] sm:max-w-[18rem]">
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(181,131,118,0.2), transparent 38%), radial-gradient(circle at 80% 80%, rgba(132,159,118,0.2), transparent 40%), linear-gradient(135deg, #FDFBF7 0%, #F8F4ED 100%)"
          }}
        />
        {/* <div className="absolute inset-0 flex items-center justify-center bg-black/20 p-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white">
          Event media placeholder
        </div> */}
      </div>
    );
  }

  if (isMediaBroken) {
    return (
      <div className="relative mx-auto h-[26rem] w-full max-w-[16rem] overflow-hidden rounded-2xl sm:h-[30rem] sm:max-w-[18rem]">
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(181,131,118,0.2), transparent 38%), radial-gradient(circle at 80% 80%, rgba(132,159,118,0.2), transparent 40%), linear-gradient(135deg, #FDFBF7 0%, #F8F4ED 100%)"
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 p-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white">
          Add event media in public/assets
        </div>
      </div>
    );
  }

  if (media.type === "video") {
    return (
      <video
        src={resolvedSrc}
        poster={media.poster}
        className="mx-auto h-[26rem] w-full max-w-[16rem] rounded-2xl object-cover sm:h-[30rem] sm:max-w-[18rem]"
        controls
        playsInline
        preload="metadata"
        onError={() => setIsMediaBroken(true)}
      />
    );
  }

  return (
    <img
      src={resolvedSrc}
      alt={media.alt}
      className="mx-auto h-[26rem] w-full max-w-[16rem] rounded-2xl object-cover sm:h-[30rem] sm:max-w-[18rem]"
      onError={() => setIsMediaBroken(true)}
    />
  );
}

export default function WeddingInvitation() {
  const { colors, hero, welcomeCountdown, venue, events, combinedVideo, footer } = WEDDING_CONTENT;
  const [isCombinedVideoBroken, setIsCombinedVideoBroken] = useState(false);

  return (
    <main
      className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-body)]"
      style={{
        "--bg-primary": colors.bgPrimary,
        "--text-heading": colors.textHeading,
        "--text-body": colors.textBody,
        "--accent-green": colors.accentGreen,
        "--deep-accent-green": colors.deepAccentGreen
      }}
    >
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-20 text-center sm:px-8 sm:pt-28">
        <motion.p
          className="font-script text-5xl text-[var(--text-heading)] sm:text-7xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {hero.names}
        </motion.p>
        <motion.p
          className="mt-4 font-serif text-2xl text-[var(--text-body)] sm:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          {hero.dateLabel}
        </motion.p>
      </section>

      <section className="relative isolate overflow-hidden px-5 py-16 sm:px-8 sm:py-24">
        <div className="absolute inset-0">
          {welcomeCountdown.backgroundMedia.type === "video" ? (
            <video
              className="h-full w-full object-cover"
              src={welcomeCountdown.backgroundMedia.src}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : welcomeCountdown.backgroundMedia.type === "image" ? (
            <img
              src={welcomeCountdown.backgroundMedia.src}
              alt={welcomeCountdown.backgroundMedia.alt}
              className="h-full w-full object-cover"
            />
          ) : (
            <div
              className="h-full w-full"
              style={{
                background:
                  "radial-gradient(circle at 20% 20%, rgba(181,131,118,0.18), transparent 38%), radial-gradient(circle at 80% 80%, rgba(132,159,118,0.22), transparent 40%), linear-gradient(135deg, #FDFBF7 0%, #F8F4ED 100%)"
              }}
            />
          )}
          <div className="absolute inset-0 bg-white/20" />
        </div>

        <div className="relative mx-auto max-w-4xl rounded-3xl border border-white/60 bg-white/45 p-6 shadow-xl sm:p-10">
          <h2 className="font-serif text-3xl text-[var(--text-heading)] sm:text-4xl">{welcomeCountdown.names}</h2>
          <p className="mt-3 font-sans text-lg text-[var(--text-body)] sm:text-xl">{welcomeCountdown.tagline}</p>
          <p className="mt-4 font-serif text-2xl text-[var(--text-heading)]">{welcomeCountdown.weddingDateText}</p>
          <Countdown content={welcomeCountdown} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-24">
        <h2 className="font-serif text-3xl text-[var(--text-heading)] sm:text-4xl">{venue.heading}</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg">{venue.bodyText}</p>
        <p className="mt-4 font-serif text-2xl text-[var(--text-heading)] sm:text-3xl">{venue.venueName}</p>
        <p className="mt-2 text-sm uppercase tracking-[0.25em]">{venue.location}</p>
        <a
          href={venue.action.href}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3 font-sans text-sm font-semibold tracking-wide text-white transition-transform duration-300 hover:scale-105"
          style={{ backgroundColor: "var(--accent-green)" }}
        >
          <span aria-hidden>📍</span>
          {venue.action.label}
        </a>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="text-center font-serif text-3xl text-[var(--text-heading)] sm:text-4xl">{events.heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg">{events.subheading}</p>

        <div className="mt-10 space-y-12">
          {events.items.map((event) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-white/70 bg-white/45 p-6 text-center shadow-md sm:p-7"
            >
              <h3 className="font-serif text-2xl text-[var(--text-heading)]">{event.title}</h3>
              <p className="mb-5 mt-2 font-sans text-sm uppercase tracking-[0.2em] text-[var(--text-body)]">{event.date}</p>
              <EventMedia media={event.media} />
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16 text-center sm:px-8 sm:pb-24">
        <h2 className="font-serif text-3xl text-[var(--text-heading)] sm:text-4xl">{combinedVideo.heading}</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg">{combinedVideo.description}</p>

        {!isCombinedVideoBroken ? (
          <div className="mx-auto mt-8 w-full max-w-md rounded-2xl border border-white/70 bg-black shadow-md">
            <video
              className="h-auto max-h-[80vh] w-full rounded-2xl object-contain"
              src={combinedVideo.media.src}
              poster={pelliImage.src}
              controls
              playsInline
              preload="metadata"
              onError={() => setIsCombinedVideoBroken(true)}
            />
          </div>
        ) : (
          <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-white/70 bg-white/45 p-8 text-center shadow-md">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-body)]">
              Add your combined video file to public/assets
            </p>
            <p className="mt-3 font-mono text-sm text-[var(--text-heading)]">/assets/wedding-combined.mp4</p>
          </div>
        )}
      </section>

      {/* Celebrate With Us section commented out for now. */}

      <footer>
        {/* Leave Us a Note section commented out for now. */}

        <div className="px-5 py-12 text-center text-white sm:px-8" style={{ backgroundColor: "var(--deep-accent-green)" }}>
          <h3 className="font-serif text-3xl">{footer.bottomBlock.title}</h3>
          <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base">{footer.bottomBlock.body}</p>
          <p className="mt-5 text-xs tracking-[0.25em]">{footer.bottomBlock.closing}</p>
        </div>
      </footer>
    </main>
  );
}
