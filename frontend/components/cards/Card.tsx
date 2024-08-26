import { Project } from "@/src/types/project";
import Link from "next/link";
import { Tag } from "../Tag";

import { transformCardTitle } from "@/src/utils/transformCardTitle";

import { twMerge } from "tailwind-merge";
import { IconArrow } from "../icons/IconArrow";

type CardVerticalProps = {
	project: Project;
	idx: number;
};

export const Card = ({ project, idx }: CardVerticalProps) => {
	return (
		<li
			key={project.title}
			className={twMerge(
				"group w-[250px] drop-shadow-2xl",
				idx % 2 ? "translate-y-12" : "-translate-y-12"
			)}>
			<figure className="relative flex justify-center items-center overflow-hidden">
				<img
					src={"/images/me.png"}
					className="aspect-[0.7/1] bg-[grey] w-full h-full object-cover group-hover:scale-[1.1] transition-transform"
				/>
				{/* TODO: Add tags and hover logic etc. */}
				{project.tags && project.tags.length > 0 && (
					<div className="absolute left-1 bottom-1 max-w-[80%] flex flex-wrap gap-0.5">
						{project.tags.map((tag: string) => (
							<Tag text={tag} />
						))}
					</div>
				)}
			</figure>
			<div className="mt-2 ml-1">
				<h2 className="text-blue-primary text-2xl font-primary">
					{transformCardTitle(project.title)}
				</h2>
				<div className="w-full flex justify-between items-start">
					<Link
						className="text-lg max-w-[80%] group-hover:text-blue-primary transition-colors"
						href={""}>
						{project.description}
					</Link>
					<div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
						<IconArrow />
					</div>
				</div>
			</div>
		</li>
	);
};
