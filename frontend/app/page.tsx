import { TheHeader } from "@/components/header/TheHeader";
import { HomeHero } from "@/components/HomeHero";

export default function Page() {
	return (
		<>
			<TheHeader />
			<main className="w-full px-2 md:px-6">
				<HomeHero />
			</main>
		</>
	);
}
