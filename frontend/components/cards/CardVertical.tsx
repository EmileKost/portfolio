import { Project } from "@/src/types/project";
import Link from "next/link";

type CardVerticalProps = {
	project: Project;
	idx: number;
};

export const CardVertical = ({ project, idx }: CardVerticalProps) => {
	return (
		<li key={project.title}>
			<figure className="w-[250px] relative">
				<div className="aspect-[0.7/1] bg-black-primary w-full h-full">
					Black image
					{/* TODO: Add tags and hover logic etc. */}
				</div>
			</figure>
			<div>
				<h2>{project.title}</h2>
				<Link href={""}>{project.description}</Link>
			</div>
		</li>
	);
};
