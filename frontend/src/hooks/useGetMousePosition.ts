import { useEffect, useState } from "react";

export const useMousePosition = (ref: React.RefObject<HTMLDivElement>) => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	useEffect(() => {
		const getMousePosition = (e: MouseEvent) => {
			if (ref.current) {
				const rect = ref.current.getBoundingClientRect();
				const x = e.clientX;
				const y = e.clientY;
				console.log(x, y);

				setPosition({ x, y });
			}
		};

		const element = ref.current;
		if (element) {
			element.addEventListener("mousemove", getMousePosition);
		}

		return () => {
			if (element) {
				element.removeEventListener("mousemove", getMousePosition);
			}
		};
	});

	return position;
};
