import { projects as testProjects } from "@/src/constants/projects";
import { splitProjectsArray } from "@/src/utils/splitProjectsArray";

export const ProjectsSlider = (projects: any) => {
	const { verticalArray, horizontalArray } = splitProjectsArray(testProjects);

	console.log(verticalArray);
	console.log(horizontalArray);

	return (
		<div>
			<div></div>
		</div>
	);
};

// SLIDER
// - De Parralax is alleen zichtbaar op desktop, met de custom hook useBreakpointValue kunnen we hier voor kijken (of met css)
// - De slider is een parralax, met translate-z en twee verschillende sliders in een ander tempo kunnen we dit bereiken
// - De lijsten moeten draggable zijn, en de items moeten onHover naar voren komen zodat deze wel leesbaar zijn.

// - Je wilt sowieso eerst de projects lijst opdelen in either vertical of horizontal
