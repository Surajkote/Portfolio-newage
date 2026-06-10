RECREATION PROMPT

Build a single-page landing site using React + TypeScript + Vite + Tailwind CSS + framer-motion + lucide-react. The entire page has a bg-black background. The font loaded via Google Fonts is Instrument Serif (italic and regular). Import it in index.css:


@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
LIQUID GLASS CSS (in index.css, inside @layer components)
Create a reusable .liquid-glass class used on every glass element:


.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.45) 0%,
    rgba(255, 255, 255, 0.15) 20%,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0) 60%,
    rgba(255, 255, 255, 0.15) 80%,
    rgba(255, 255, 255, 0.45) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
SECTION 1 -- HERO (full-viewport, in Index.tsx)
Full-screen (min-h-screen) container with overflow-hidden relative flex flex-col.

Background video: absolute, covers the entire viewport (absolute inset-0 w-full h-full object-cover object-bottom). URL:


https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4
Attributes: muted, autoPlay, playsInline, preload="auto". Starts at opacity: 0.

Video fade logic (vanilla JS via refs, no CSS transitions):

On canplay: play the video, then animate opacity from 0 to 1 over 500ms using requestAnimationFrame.
On timeupdate: when remaining time <= 0.55s, animate opacity from current to 0 over 500ms.
On ended: set opacity to 0, wait 100ms, reset currentTime to 0, play again, fade back to 1 over 500ms.
This creates a seamless loop with smooth crossfade to black between plays.
Navbar (relative z-20, px-6 py-6):


