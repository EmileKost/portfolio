"use client";

import { useEffect, useState, useRef } from "react";

import { TheHeader } from "@/components/header/TheHeader";
import { HomeHero } from "@/components/HomeHero";
import { About } from "@/components/About";

import { useChangeHeaderColor } from "@/src/hooks/useChangeHeaderColor";

// import { ROUTES } from "@/src/routes/routes";

export default function Page() {
	const refAbout = useRef(null);
	const refContact = useRef(null);

	const [blueContainerIsInView, setBlueContainerIsInView] =
		useState<boolean>(false);

	const isInView = useChangeHeaderColor(refAbout, refContact);

	useEffect(() => {
		isInView ? setBlueContainerIsInView(true) : setBlueContainerIsInView(false);
	}, [isInView]);

	return (
		<>
			<TheHeader isBlue={blueContainerIsInView} />
			<main className="w-full">
				<div className="w-full">
					<HomeHero />
				</div>
				<div
					className="w-full"
					ref={refAbout}>
					<About />
				</div>
				{/* Projects here first */}
				<div ref={refContact}></div>
			</main>
		</>
	);
}
