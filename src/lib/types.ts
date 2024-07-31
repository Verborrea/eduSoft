export interface Teacher {
	collectionId: string;
	collectionName: string
	created: string;
	gender: string;
	hire_date: string;
	id: string;
	name: string;
	updated: string;
	user_id: string;
}

export interface Link {
	name: string;
	href: string;
}

export interface Theme {
	id: string;
	name: string;
	text: string;
	images: string[];
	links: Link[];
}

export interface Unit {
	id: string;
	name: string;
	themes: Theme[];
	images?: any;
}