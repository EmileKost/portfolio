import { useState, useEffect } from "react";

export const useDraggableSlider = (ref: any) => {
	const [isDragging, setIsDragging] = useState<boolean>(false);
	const [positionX, setPositionX] = useState<number>(0);

	useEffect(() => {
		const element = ref.current;

		if (!element) {
			console.log("Ref not attached to any element.");
			return;
		}

		const handleDrag = (e: MouseEvent) => {
			if (!isDragging) return;
			const { pageX } = e;
			setPositionX(pageX);
		};

		const dragStart = (e: MouseEvent) => {
			console.log("DRAG START");
			setIsDragging(true);
		};

		const dragStop = () => {
			console.log("DRAG STOP");
			setIsDragging(false);
		};

		element.addEventListener("mousedown", dragStart);
		document.addEventListener("mousemove", handleDrag);
		document.addEventListener("mouseup", dragStop);

		return () => {
			element.removeEventListener("mousedown", dragStart);
			document.removeEventListener("mousemove", handleDrag);
			document.removeEventListener("mouseup", dragStop);
		};
	}, [ref, isDragging]);

	return { positionX };
};
