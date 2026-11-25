# 💍 Shubh Vivah — Avinash & Deepanjali Wedding Invitation

A premium, interactive 3D Indian wedding invitation website celebrating the holy union of **Avinash Kannaujia** and **Deepanjali Kannaujia**.

Built with **React, TypeScript, Vite, Tailwind CSS, Three.js, Canvas-Confetti, and Lucide React**.

---

## 🌺 Verified Wedding Information

- **Groom (वर)**: अविनाश कन्नौजिया (Avinash Kannaujia)
  - Parents: स्वर्गीय गुलाबी देवी एवं श्री अमीचन्द्र कन्नौजिया
  - Residence: ग्राम व पोस्ट सिंघोरा, जनपद गाजीपुर, उत्तर प्रदेश
- **Bride (वधु)**: दीपांजली कन्नौजिया (Deepanjali Kannaujia)
  - Parents: श्रीमती नयन देवी एवं श्री सतीश कन्नौजिया
  - Residence: ग्राम व पोस्ट वाजिदपुर, जनपद गाजीपुर, उत्तर प्रदेश
- **Wedding Date (विवाह तिथि)**: 09 December 2026 (Wednesday / बुधवार)
- **Baraat Departure (बारात प्रस्थान)**: सायं 3:00 बजे (निजी साधनों द्वारा)
  - From: ग्राम सिंघोरा
  - To: ग्राम व पोस्ट वाजिदपुर
- **Event Schedule (मांगलिक कार्यक्रम)**:
  1. **Tilak (तिलक उत्सव एवं प्रीतिभोज)**: 05 December 2026 (Saturday / शनिवार) — निज निवास ग्राम सिंघोरा
  2. **Haldi (हल्दी रस्म)**: 07 December 2026 (Monday / सोमवार)
  3. **Mehndi (मेहंदी उत्सव)**: 08 December 2026 (Tuesday / मंगलवार)
  4. **Shubh Vivah (शुभ विवाह)**: 09 December 2026 (Wednesday / बुधवार)
- **Main Contact (सम्पर्क सूत्र)**: श्री अमीचन्द्र कन्नौजिया
  - Phone 1: `+91 87078 85776`
  - Phone 2: `+91 70212 48038`

---

## ✨ Features

- **Genuine Three.js 3D Mandap & Falling Petals Scene**: Realistic 3D golden mandap pillars, dome kalash, flickering 3D diya with dynamic lighting, rotating gold medallion, and mouse parallax depth.
- **Interactive 3D Diya Blessing Widget**: Guests can click to light the sacred diya, triggering celebratory floral and gold confetti and incrementing a live blessing counter.
- **Traditional Ivory Card Aesthetic**: Styled like an expensive printed wedding invitation with gold foil borders and royal Devanagari typography.
- **Real-Time Countdown**: Precise live countdown to 09 Dec 2026 in Asia/Kolkata timezone with 1-click Google Calendar integration.
- **Interactive Baraat Route**: Visual guide with navigation links for Gram Singhora and Gram Wajidpur (Ghazipur, UP).
- **Clickable WhatsApp & Calling Integration**: Pre-filled WhatsApp attendance messages and direct phone dialer links.
- **Functional RSVP Form**: Guests can submit their RSVP which is saved to local storage and provides a 1-click WhatsApp dispatch to the host.
- **Background Shehnai Melody**: Traditional auspicious Indian wedding instrumentals generated via the Web Audio API with intuitive user controls (no autoplay violation).

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js (version 18 or above recommended)
- npm or yarn

### 1. Installation
Unzip the project file, navigate to the directory, and run:
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized, deployable files will be generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 1-Click Deployment

### Deploy to Vercel
```bash
npx vercel
```

### Deploy to Netlify
Drag and drop the generated `dist/` folder directly into [Netlify Drop](https://app.netlify.com/drop) or link the repository.

---

## ⚙️ Configuration

All wedding details, event timings, contact numbers, and locations are centralized in:
`src/data/weddingData.ts`
Any changes made to this file update across the entire website automatically.
