## BeFit Gjilan – Fitness Center Website

A modern, responsive one-page website for **BeFit Gjilan**, a fitness center and gym located on Esat Berisha 93 in Gjilan, Kosovo.

### Features

- **Hero section** with strong headline, quick info card, and call-to-action buttons.
- **About section** introducing BeFit and its community.
- **Services section** (bodybuilding, cardio, personal training, group sessions).
- **Opening hours / schedule** with a free trial call-to-action.
- **Membership / pricing cards** (day pass, monthly, personal training).
- **Gallery** with lightbox (click images to view larger).
- **Testimonials** from members.
- **FAQ accordion** for common questions.
- **Contact section** with form, address, phone, and social links.
- **Embedded Google Map** (replace the URL with BeFit’s real map).
- **Responsive navigation** with mobile menu.
- **Local form storage**: contact form submissions are saved in `localStorage` (for demo).

### Getting started

1. Install Node.js (if you don’t already have it).
2. In a terminal, go to this folder:

   ```bash
   cd befit-web
   ```

3. Install dependencies (none are required, but this ensures `npx` works smoothly):

   ```bash
   npm install
   ```

4. Start a simple static server:

   ```bash
   npm run start
   ```

5. Open `http://localhost:3000` or the URL that `serve` prints, and view the site.

### Customizing for the real gym

- **Photos**: replace the image URLs (in `index.html`) with real photos from:
  - Google Maps (search “BeFit Gjilan gym”)
  - Instagram
  - Facebook page
- **Map**: replace the `src` of the Google Maps `<iframe>` with the exact embed URL for BeFit.
- **Phone / social links**: update the phone number, Instagram and Facebook URLs.
- **Pricing**: adjust the membership prices and options to match real BeFit offers.

You can deploy this static site easily to platforms like Netlify, Vercel, or GitHub Pages.

