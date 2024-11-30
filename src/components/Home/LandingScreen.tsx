import { useRef } from "react";

import Cursor from "../Global/Cursor";
import StarGrid from "./StarGridGSAP";
import { div } from "motion/react-client";

export default function LandingScreen({ handleUnlock }: { handleUnlock: () => void }) {
    const container = useRef(null);

    return (
        <div>
            <Cursor />
            <div className="absolute" ref={container} style={{ height: '100vh', width: '100vw', backgroundColor: '#000' }}>
                <StarGrid />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: "center", color: "#fff" }}>
                    <h1>🔒</h1>
                    <button
                        onClick={handleUnlock}
                        style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        background: "#fff",
                        color: "#000",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        marginTop: "10px",
                        }}
                    >
                        Unlock
                    </button>
                </div>
            </div>
        </div>
    );
}