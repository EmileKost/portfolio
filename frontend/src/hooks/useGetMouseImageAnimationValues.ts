import { useState, useEffect } from "react";

export const useGetMouseAnimationValues = (ref: any) => {
	const [positionX, setPositionX] = useState<number>(0);
	const [positionY, setPositionY] = useState<number>(0);
	const [skewValue, setSkewValue] = useState<number>(0);
	const [opacityValue, setOpacityValue] = useState<number>(0);

	useEffect(() => {
		if (!ref.current) return;
		const container = ref.current;

		// 0deg -> 10deg
		// percentage van tophalf or bottomhalf
		// skewValue =

		const getAnimationValues = (event: MouseEvent) => {
			const { height } = container.getBoundingClientRect();
			const { clientX, clientY } = event;

			const isTopHalfScreen = clientY <= height / 2 ? true : false;

			if (isTopHalfScreen) {
				setSkewValue(4);
			} else {
				setSkewValue(-4);
			}

			if (clientX <= 10 || clientY <= 140) {
				setOpacityValue(0);
			} else {
				setOpacityValue(1);
			}

			setPositionX(clientX);
			setPositionY(clientY);
		};

		container.addEventListener("mousemove", getAnimationValues);

		return () => container.removeEventListener("mousemove", getAnimationValues);
	});

	return { positionX, positionY, opacityValue, skewValue };
};
