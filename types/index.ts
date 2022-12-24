export type Project = {
	_id: string;
	_type: "project";
	title: string;
	slug: {
		_type: "slug";
		current: string;
	};
	repo: string;
	description: string;
	publishedAt: string;
	technologies: {
		_ref: string;
		_type: "reference";
	}[];
	Date: string;
	demo: string;
};

export type LinkButton = {
	url: string;
	label: string;
};
