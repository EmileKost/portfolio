import { useState, useEffect } from "react";

export const useGetMouseAnimationValues = (ref: any) => {
	const [positionX, setPositionX] = useState<number>(0);
	const [positionY, setPositionY] = useState<number>(0);
	const [skewXValue, setSkewXValue] = useState<number>(0);
	const [skewYValue, setSkewYValue] = useState<number>(0);

	useEffect(() => {
		if (!ref.current) return;
		const container = ref.current;

		const { height, width } = container.getBoundingClientRect();

		const getAnimationValues = (event: MouseEvent) => {
			const { clientX, clientY } = event;

			const isTopHalfScreen = clientY <= height / 2 ? true : false;
			const isLeftHalfScreen = clientX <= width / 2 ? true : false;

			// Set skewX and Y
			setSkewXValue(isLeftHalfScreen ? 2 : -2);
			setSkewYValue(isTopHalfScreen ? 2 : -2);

			// Set mouse position
			setPositionX(clientX <= width / 2 ? 1000 : clientX);
			setPositionY(clientY);
		};

		container.addEventListener("mousemove", getAnimationValues);

		return () => container.removeEventListener("mousemove", getAnimationValues);
	});

	return { positionX, positionY, skewXValue, skewYValue };
};
