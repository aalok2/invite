export const WEDDING_CONTENT = {
  seo: {
    title: "Sri Moulika & Sai Viswanath | Wedding Invitation",
    description:
      "Join us in celebrating the wedding festivities of Sri Moulika and Sai Viswanath."
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
    ariaLabel: "Reveal the wedding invitation"
  },
  hero: {
    names: "Sri Moulika & Sai Viswanath",
    dateLabel: "SEPTEMBER 3-5, 2026"
  },
  welcomeCountdown: {
    backgroundMedia: {
      type: "none"
    },
    names: "Sri Moulika & Sai Viswanath",
    tagline: "Together, we celebrate our wedding festivities",
    weddingDateText: "Festivities Begin: SEPTEMBER 3, 2026",
    weddingDateISO: "2026-09-03T09:00:00+05:30",
    unitLabels: {
      days: "Days",
      hours: "Hours",
      minutes: "Mins",
      seconds: "Secs"
    }
  },
  venue: {
    heading: "Our Wedding Venue",
    bodyText:
      "We are thrilled to invite you to celebrate our special day at the beautiful",
    venueName: "CENTENARY HALL, WALTAIR CLUB",
    location: "VISAKHAPATNAM",
    action: {
      label: "NAVIGATE TO VENUE",
      href: "https://maps.app.goo.gl/6YSFwPdyHmqSNQtXA"
    }
  },
  events: {
    heading: "Wedding Festivities",
    subheading: "Join us for every beautiful moment of our celebrations.",
    items: [
      {
        id: "pellikuturu-sep3-morning",
        title: "Pellikuturu",
        date: "SEPTEMBER 3 | MORNING",
        media: {
          type: "image",
          src: "pelli-kuthuru-image",
          alt: "Pellikuturu ceremony invitation"
        }
      },
      {
        id: "mehendi-sep3-evening",
        title: "Mehandi",
        date: "SEPTEMBER 3 | EVENING",
        media: {
          type: "image",
          src: "mehendi-image",
          alt: "Mehandi ceremony invitation"
        }
      },
      {
        id: "cocktail-sep4-evening",
        title: "Cocktail",
        date: "SEPTEMBER 4 | EVENING",
        media: {
          type: "image",
          src: "cocktail-image",
          alt: "Cocktail party invitation"
        }
      },
      {
        id: "haldi-sep5-morning",
        title: "Haldi",
        date: "SEPTEMBER 5 | MORNING",
        media: {
          type: "image",
          src: "haldi-image",
          alt: "Haldi ceremony invitation"
        }
      },
      {
        id: "pelli-sep5-evening",
        title: "Pelli",
        date: "SEPTEMBER 5 | EVENING",
        media: {
          type: "image",
          src: "pelli-image",
          alt: "Pelli ceremony invitation"
        }
      }
    ]
  },
  combinedVideo: {
    heading: "Wedding Moments Video",
    description:
      "A combined video for all ceremonies.",
    media: {
      src: "/assets/WhatsApp%20Video%202026-08-07%20at%2023.24.01%20(1).mp4",
      poster: "/assets/engagement.jpeg"
    }
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
        "We can't wait to celebrate our wedding festivities with you. Your presence and blessings mean the world to us.",
      closing: "TOGETHER WITH OUR FAMILIES"
    }
  }
};
