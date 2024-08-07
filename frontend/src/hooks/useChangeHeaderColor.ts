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
// Door precies te kunnen snappen moeten we once: true zetten en ook inView checken van de witte containers zodat de snap goed werkt
// Dit wordt de refactor stap voor de volgende keer!!!!!!
