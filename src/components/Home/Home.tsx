import CursorDark from "@/components/Global/CursorDark";
import HomeContent from "@/components/Home/HomeContent";
import TechnicalContent from "@/components/Home/TechnicalContent";
import Toggle from "@/components/Global/Toggle";
import { useState, useEffect } from "react";

export default function Home() {
    const [isTechnicalMode, setIsTechnicalMode] = useState(false);
    const [isSwitching, setIsSwitching] = useState(false);
    const [hasToggled, setHasToggled] = useState(false); // Tracks if toggle has been interacted with

    useEffect(() => {
        if (hasToggled) {
            setIsSwitching(true);
            setTimeout(() => setIsSwitching(false), 1000); // Duration of the animation
        }
    }, [isTechnicalMode]);

    const handleToggle = (checked: boolean) => {
        setIsTechnicalMode(checked);
        setHasToggled(true); // Mark as toggled when user interacts
    };

    return (
        <div>
            <CursorDark />
            <div className="absolute top-0 right-0 m-4">
                <Toggle isChecked={isTechnicalMode} setIsChecked={handleToggle} />
            </div>
            {isSwitching ? (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p>context switch (pun intended)</p>
                </div>
            ) : isTechnicalMode ? <TechnicalContent /> : <HomeContent />}
        </div>
    );
}