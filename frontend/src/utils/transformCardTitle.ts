export const transformCardTitle = (title: string) => {
	if (!title) return;

	title = title.replace(" ", "_").toUpperCase();

	return title;
};
