export const WEDDING_CONTENT = {
  seo: {
    title: "Sri Moulika & Sai Viswanath | Engagement Invitation",
    description:
      "Join us in celebrating the engagement of Sri Moulika and Sai Viswanath."
  },
  colors: {
    bgPrimary: "#FDFBF7",
    bgEnvelope: "#A8CDBC",
    textHeading: "#5F3A3A",
    textBody: "#3F3533",
    accentGreen: "#849F76",
    deepAccentGreen: "#5D7553",
    goldAccent: "#D4AF37"
  },
  revealOverlay: {
    waxSealInitials: "S&S",
    cta: "Tap To Reveal",
    ariaLabel: "Reveal the engagement invitation"
  },
  hero: {
    names: "Sri Moulika & Sai Viswanath",
    dateLabel: "JUNE 21, 2026 | 07:47 AM"
  },
  welcomeCountdown: {
    backgroundMedia: {
      type: "none"
    },
    names: "Sri Moulika & Sai Viswanath",
    tagline: "Together, we celebrate our engagement",
    weddingDateText: "JUNE 21, 2026 | 07:47 AM",
    weddingDateISO: "2026-06-21T07:47:00+05:30",
    unitLabels: {
      days: "Days",
      hours: "Hours",
      minutes: "Mins",
      seconds: "Secs"
    }
  },
  venue: {
    heading: "Our Engagement Venue",
    bodyText:
      "We are thrilled to invite you to celebrate our special day at the beautiful",
    venueName: "TORWN HALL, FLUENTGRID LIMITED",
    location: "HILL NO. 1, PLOT NO. 2, RUSHIKONDA, MADHURAWADA, VISAKHAPATNAM",
    action: {
      label: "NAVIGATE TO VENUE",
      href: "https://maps.app.goo.gl/tjBaWhbYQ9itVVBL6"
    }
  },
  events: {
    heading: "The Celebration",
    subheading: "A joyful beginning to our new journey...",
    items: [
      {
        id: "engagement",
        title: "Engagement",
        date: "JUNE 21, 2026 | 07:47 AM",
        media: {
          type: "image",
          src: "/assets/engagement.jpeg",
          alt: "Sri Moulika and Sai Viswanath engagement invitation"
        }
      }
    ]
  },
  guestInteraction: {
    heading: "Celebrate With Us",
    description:
      "Make a fun guess and tell us your celebration mood.",
    form: {
      guestName: {
        label: "Guest Name",
        placeholder: "Enter your name"
      },
      // rsvp: {
      //   label: "RSVP Status",
      //   options: [
      //     {
      //       id: "accept",
      //       label: "JOYFULLY ACCEPT",
      //       style: "solid"
      //     },
      //     {
      //       id: "decline",
      //       label: "REGRETFULLY DECLINE",
      //       style: "outline"
      //     }
      //   ]
      // },
      poll: {
        label: "Make a Guess",
        options: [
          {
            id: "s",
            label: "S",
            fullName: "Sri Moulika"
          },
          {
            id: "p",
            label: "P",
            fullName: "Sai Viswanath"
          },
          {
            id: "b",
            label: "B",
            fullName: "Both"
          }
        ]
      },
      mood: {
        label: "Your Wedding Mood",
        min: 0,
        max: 100,
        defaultValue: 70,
        lowLabel: "Calm",
        highLabel: "Super Excited"
      }
    }
  },
  footer: {
    heading: "Leave Us a Note",
    inputPlaceholder: "Write your blessings and wishes...",
    sendButton: "SEND LOVE",
    bottomBlock: {
      title: "With Love & Blessings",
      body:
        "We can't wait to celebrate this special engagement with you. Your presence and blessings mean the world to us.",
      closing: "TOGETHER WITH OUR FAMILIES"
    }
  }
};
