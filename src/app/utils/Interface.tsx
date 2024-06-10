export interface Post{
	title: string,
	slug: {current: string},
	publishedAt: string,
	excerpt: string,
	body: BodyBlock[],
	tags: Array<Tag>,
	_id: string
}

export interface BodyBlock {
  _type: string;
  [key: string]: any;
}

export interface Tag{
	name: string,
	slug: {current: string},
	_id: string,
	postCount?: number
}