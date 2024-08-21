import { useState, useEffect } from "react";

export const useGetMouseAnimationValues = (ref: any) => {
	const [positionX, setPositionX] = useState<number>(0);
	const [positionY, setPositionY] = useState<number>(0);

	useEffect(() => {
		if (!ref.current) return;
		const container = ref.current;

		const getAnimationValues = (event: MouseEvent) => {
			const { width, height } = container.getBoundingClientRect();
			const { clientX, clientY } = event;

			setPositionX(clientX);
			setPositionY(clientY);
		};

		container.addEventListener("mousemove", getAnimationValues);

		return () => container.removeEventListener("mousemove", getAnimationValues);
	});

	return { positionX, positionY };
};
