import { useEffect, useState } from "react";
import { useInView } from "framer-motion";

import { RefObject } from "react";

export const useChangeHeaderColor = (
	refAbout: RefObject<Element>,
	refContact: RefObject<Element>
) => {
	const [blueContainerInView, setBlueContainerInView] =
		useState<boolean>(false);
	const isAboutInView = useInView(refAbout, { amount: 1 });
	const isContactInView = useInView(refContact, { amount: 1 });

	useEffect(() => {
		if (!refAbout || !refContact) return;

		const isEitherInView = isAboutInView || isContactInView;
		setBlueContainerInView(isEitherInView);
	}, [
		isAboutInView,
		isContactInView,
		blueContainerInView,
		refAbout,
		refContact,
	]);

	return blueContainerInView;
};

// TODO: We can maybe do this on a more dynamic way with [data-]
