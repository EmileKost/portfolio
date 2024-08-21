import { useState, useEffect } from "react";

export const useGetMouseAnimationValues = (ref: any) => {
	const [positionX, setPositionX] = useState<number>(0);
	const [positionY, setPositionY] = useState<number>(0);
	const [skewXValue, setSkewXValue] = useState<number>(0);
	const [skewYValue, setSkewYValue] = useState<number>(0);
	const [opacityValue, setOpacityValue] = useState<number>(0);

	useEffect(() => {
		if (!ref.current) return;
		const container = ref.current;

		const getAnimationValues = (event: MouseEvent) => {
			const { height, width } = container.getBoundingClientRect();
			const { clientX, clientY } = event;

			const isTopHalfScreen = clientY <= height / 2 ? true : false;
			const isLeftHalfScreen = clientX <= width / 2 ? true : false;
			const cursorIsOutOfContainer =
				clientX <= 10 || clientY <= 140 ? true : false;

			// Set skewX and Y
			setSkewXValue(isLeftHalfScreen ? 4 : -4);
			setSkewYValue(isTopHalfScreen ? 4 : -4);

			// Set opacity
			setOpacityValue(cursorIsOutOfContainer ? 0 : 1);

			// Set mouse position
			setPositionX(clientX);
			setPositionY(clientY);
		};

		container.addEventListener("mousemove", getAnimationValues);

		return () => container.removeEventListener("mousemove", getAnimationValues);
	});

	return { positionX, positionY, opacityValue, skewXValue, skewYValue };
};
