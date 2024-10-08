type IconPlusProps = {
	color: string;
};

export const IconPlus = ({ color }: IconPlusProps) => (
	<svg
		width="12"
		height="12"
		viewBox="0 0 8 8"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="transition-colors">
		<path
			d="M8 4.57143H4.57143V8H3.42857V4.57143H0V3.42857H3.42857V0H4.57143V3.42857H8V4.57143Z"
			fill={color}
		/>
	</svg>
);
