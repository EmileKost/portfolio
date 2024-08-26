import { useState, useEffect } from "react";

export const useBreakpointValue = () => {
	const [screenWidth, setScreenWidth] = useState<number>(0);

	useEffect(() => {
		if (window) {
			setScreenWidth(window.innerWidth);
		}

		const handleResize = () => {
			if (!window) return;
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [screenWidth]);

	return screenWidth;
};
