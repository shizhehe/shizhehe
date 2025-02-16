// Taken from https://github.com/Tina-Mai/tinamai/blob/main/src/components/Global/Cursor.tsx

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import cursor_dark from "@/assets/cursor_dark.svg";

const CursorDark = () => {
	const cursorRef = useRef<HTMLImageElement>(null); // use ref to directly manipulate the DOM element

	useEffect(() => {
		// function to move the cursor
		const moveCursor = (e: MouseEvent) => {
			if (cursorRef.current) {
				const x = e.clientX;
				const y = e.clientY;

				// update cursor position and ensure it's visible
				cursorRef.current.style.left = `${x}px`;
				cursorRef.current.style.top = `${y}px`;
				cursorRef.current.style.display = "block";
			}
		};

		// function to hide the cursor on mouse out
		const handleMouseOut = (e: MouseEvent) => {
			if (cursorRef.current && (!e.relatedTarget || e.relatedTarget === null)) {
				cursorRef.current.style.display = "none";
			}
		};

		// add event listeners if the device does not support touch events
		if (!("ontouchstart" in window || navigator.maxTouchPoints)) {
			document.addEventListener("mousemove", moveCursor);
			document.addEventListener("mouseout", handleMouseOut);
		}

		return () => {
			// clean up event listeners
			document.removeEventListener("mousemove", moveCursor);
			document.removeEventListener("mouseout", handleMouseOut);
		};
	}, []);

	return (
		<Image
			ref={cursorRef}
			src={cursor_dark}
			alt="cursor"
			width={32}
			height={32}
			style={{
				position: "fixed",
				left: "0px",
				top: "0px",
				zIndex: 20,
				pointerEvents: "none", // ensure the image does not interfere with other elements
				display: "none", // start with cursor hidden
			}}
		/>
	);
};

export default CursorDark;