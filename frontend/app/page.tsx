import { TheHeader } from "@/components/header/TheHeader";
import { HomeHero } from "@/components/HomeHero";
import { About } from "@/components/About";

import { ROUTES } from "@/src/routes/routes";

export default function Page() {
	const getProjects = async () => {
		try {
			const response = await fetch(`http://localhost:4500/api/projects`);
			const result = await response.json();
			console.log({ result });
		} catch (err) {
			console.log(err);
			throw err;
		}
	};

	getProjects();

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
