"use client";

import { useEffect, useState } from "react";

export default function ResponsiveIframe() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 430);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (isMobile) {
    return (
      <div>
        <p className="mb-2">
          You seem to use a device with a very small screen, please click{" "}
          <a
            href="https://spotify-card-widget.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white transition hover:bg-gray-800"
          >
            here
          </a>{" "}
          to visit the app and remember to enable the tilt and reload the page
          to see the cool tilting effect, also try clicking on it to see what
          happens!
        </p>
      </div>
    );
  }

  return (
    <iframe
      src="https://spotify-card-widget.vercel.app/"
      className="aspect-video h-[800px] w-full rounded-xl border-none"
    />
  );
}
