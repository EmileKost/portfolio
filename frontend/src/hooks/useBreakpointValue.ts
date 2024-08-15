import { useState, useEffect } from "react";

export const useBreakpointValue = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	useEffect(() => {
		const handleResize = () => {
			if (!window) return;

			const { innerWidth } = window;
			innerWidth <= 768 ? setIsMobile(true) : setIsMobile(false);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	return isMobile;
};
