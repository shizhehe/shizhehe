"use client";
import { useState, useEffect } from "react";

import Home from "@/components/Home/Home";
import Footer from "@/components/Global/Footer";
import LandingScreen from "@/components/Home/LandingScreen";

export default function Index() {
  const [unlocked, setUnlocked] = useState(false);
  const [animation, setAnimation] = useState(false);

  const handleUnlock = () => {
    setAnimation(true);
    setTimeout(() => {
      setUnlocked(true);
    }, 1000); // Duration of the animation
  }

  useEffect(() => {
    if (animation) {
      document.body.style.transition = 'opacity 1s ease';
      document.body.style.opacity = '0';
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 1000); // Duration of the animation
    }
  }, [animation]);

  return (
    <div style={{ cursor: "none", backgroundColor: "white", position: "relative", minHeight: "100vh" }}>
      { unlocked ? (
        <Home />
      ) : (
        <LandingScreen handleUnlock={handleUnlock} />
      )}
      <Footer />
    </div>
  );
}
