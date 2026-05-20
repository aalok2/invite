

**System/Context:**
Act as an expert frontend developer specializing in React, Next.js, Tailwind CSS, and Framer Motion. Your task is to build a highly interactive, elegant, and fully responsive digital wedding invitation website.

**Core Requirements:**

1. **Tech Stack:** React (or Next.js), Tailwind CSS for styling, and Framer Motion for animations.
2. **Responsiveness:** The design must look flawless on all devices, prioritizing a mobile-first approach (since it will likely be viewed on phones/tablets via WhatsApp links).
3. **Data Architecture (Crucial):** ALL dynamic content (names, dates, times, venue details, event info, form labels) MUST be extracted into a separate `src/data/constants.js` (or `.ts`) file. The UI components must map over or reference this file. Do not hardcode content into the UI components.
4. **Media:** Do not attempt to generate or embed specific videos. Use standard `<video>` or `<img>` tags with generic placeholder sources (e.g., `/assets/event-1.mp4`). I will provide the media files later.
5. **UI/UX Vibe:** Soft, romantic, elegant, and modern.

**Design System & Styling:**

* **Color Palette:**
* `bg-primary`: Off-white/Cream (e.g., `#FDFBF7`)
* `bg-envelope`: Mint Green (e.g., `#A8CDBC`)
* `text-heading`: Rose Gold / Soft Taupe (e.g., `#B58376`)
* `text-body`: Warm Gray / Olive (e.g., `#7A7A7A`)
* `accent-green`: Sage Green for buttons/footer (e.g., `#849F76`)
* `gold-accent`: Gold foil color for borders/illustrations (e.g., `#D4AF37`)


* **Typography:**
* `font-script`: An elegant, flowing script font for primary names and stylistic headers (use Google Fonts: 'Great Vibes', 'Alex Brush', or similar).
* `font-serif`: A sophisticated serif for dates and secondary headers (use Google Fonts: 'Cormorant Garamond' or 'Playfair Display').
* `font-sans`: A clean sans-serif for body text, countdown, and buttons (use Google Fonts: 'Montserrat' or 'Lato').


* **Components:** Buttons should be pill-shaped with soft hover transitions. Cards should use glassmorphism (semi-transparent white backgrounds with soft blurring `backdrop-blur-md` and rounded corners `rounded-3xl`).

**Section-by-Section Breakdown:**

**1. Landing / "Tap to Reveal" Overlay**

* **Visual:** Full-screen overlay acting as a digital envelope. Mint green background with gold floral/lily of the valley illustrations.
* **Interaction:** A center wax seal with initials "S&P". When clicked ("Tap To Reveal"), use Framer Motion to split the envelope or fade it out smoothly to reveal the main website beneath.

**2. Hero Section**

* **Visual:** Clean, minimalist.
* **Content:** "Shanmuka & Priyanka" (Script font), "11th April, 2026" (Serif font).

**3. Welcome & Countdown Section**

* **Background:** Needs a background image/video placeholder spanning the section.
* **Foreground Card:** A translucent white card centered on the screen.
* **Content:** "Shanmuka Sai & Priyanka", "Together, we begin our forever", "11th April 2026".
* **Feature:** A live countdown timer displaying Days, Hours, Mins, Secs.

**4. Venue Section**

* **Content:** Heading "Our Wedding Venue", text "We are thrilled to invite you to celebrate our special day at the beautiful", Venue Name: "MKBR Convention Center", Location: "MEDIPALLY".
* **Action:** A sage green pill button with a map pin icon: "NAVIGATE TO VENUE" (href will be in constants).

**5. Events Section ("The Celebration Unfolds")**

* **Content:** Subheading "A celebration of sacred tradition and joyful union...".
* **Cards:** Render a list of events mapped from `constants.js`. Each event card should have: Event Title (e.g., "Haldi and Pelli Kuturu"), Date (e.g., "9th April 2026"), and a vertical video/image placeholder with rounded corners.

**6. Interactive Guest Section**

* **Forms (UI only, no backend needed yet):**
* **Guest Details:** Text inputs for Name.
* **RSVP Status:** Two side-by-side buttons: "JOYFULLY ACCEPT" (solid green) and "REGRETFULLY DECLINE" (outline or text only).
* **Make a Guess / Polls:** Radio buttons/checkboxes with initials "S", "P", "B" (Shanmuka, Priyanka, Both).
* **Your Wedding Mood:** A draggable slider component.



**7. Footer ("Leave Us a Note")**

* **Top Half:** Input field to leave a message, followed by a "SEND LOVE" button.
* **Bottom Half:** Deep sage green background block. Text: "With Love & Blessings", "We can't wait to share the beginning of our forever with you. Your presence and blessings mean the world to us.", "TOGETHER WITH OUR FAMILIES".

**First Step:**
Please provide the complete `constants.js` file structure first based on the text provided above, and then generate the main layout and the "Tap to Reveal" Framer motion component.