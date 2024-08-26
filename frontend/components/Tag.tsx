type TagProps = {
	text: string;
};

export const Tag = ({ text }: TagProps) => (
	<h4 className="min-w-14 text-center font-light bg-black-primary text-xs w-fit text-white-primary py-1 px-3 group-hover:bg-blue-primary transition-colors">
		{text}
	</h4>
);
