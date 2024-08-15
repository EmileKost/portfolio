import { projects as testProjects } from "@/src/constants/projects";
import { Project } from "@/src/types/project";
import { splitProjectsArray } from "@/src/utils/splitProjectsArray";
import { CardVertical } from "./cards/CardVertical";

export const ProjectsSlider = (projects: any) => {
	const { verticalArray, horizontalArray } = splitProjectsArray(testProjects);

	return (
		<div className="w-full">
			{verticalArray && verticalArray.length > 0 && (
				<ul className="max-w-screen overflow-hidden flex justify-start gap-16">
					{verticalArray.map((project: Project, idx: number) => (
						<CardVertical
							project={project}
							idx={idx}
						/>
					))}
					{verticalArray.map((project: Project, idx: number) => (
						<CardVertical
							project={project}
							idx={idx}
						/>
					))}
				</ul>
			)}
		</div>
	);
};

// SLIDER
// - De Parralax is alleen zichtbaar op desktop, met de custom hook useBreakpointValue kunnen we hier voor kijken (of met css)
// - De slider is een parralax, met translate-z en twee verschillende sliders in een ander tempo kunnen we dit bereiken
// - De lijsten moeten draggable zijn, en de items moeten onHover naar voren komen zodat deze wel leesbaar zijn.

// - Je wilt sowieso eerst de projects lijst opdelen in either vertical of horizontal
