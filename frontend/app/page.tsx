"use client";

import { useEffect, useState, useRef } from "react";

import { TheHeader } from "@/components/header/TheHeader";
import { HomeHero } from "@/components/HomeHero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";

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
			<main className="w-full max-h-screen overflow-y-scroll snap-y snap-mandatory">
				<div className="w-full h-screen snap-center">
					<HomeHero />
				</div>
				<div
					className="w-full h-screen snap-center"
					ref={refAbout}>
					<About />
				</div>
				<div className="w-full h-screen snap-center">
					<Projects projects={"skibidap"} />
				</div>
				{/* <div
					ref={refContact}
					className="w-full h-screen snap-center snap-element"></div> */}
			</main>
		</>
	);
}
