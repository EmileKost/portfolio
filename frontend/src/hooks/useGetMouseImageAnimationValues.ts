import { useState, useEffect } from "react";

export const useGetMouseAnimationValues = (ref: any) => {
	const [positionX, setPositionX] = useState<number>(0);
	const [positionY, setPositionY] = useState<number>(0);
	const [opacityValue, setOpacityValue] = useState<number>(0);

	useEffect(() => {
		if (!ref.current) return;
		const container = ref.current;

		const getAnimationValues = (event: MouseEvent) => {
			const { clientX, clientY } = event;

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

	return { positionX, positionY, opacityValue };
};
