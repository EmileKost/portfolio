import { TheHeader } from "@/components/header/TheHeader";
import { HomeHero } from "@/components/HomeHero";
import { About } from "@/components/About";

import { ROUTES } from "@/src/routes/routes";

export default function Page() {
	return (
		<>
			<TheHeader />
			<main className="w-full">
				<HomeHero />
				<About />
			</main>
		</>
	);
}
