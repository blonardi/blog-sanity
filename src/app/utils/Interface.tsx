export interface Post{
	title: string,
	slug: {current: string},
	publishedAt: string,
	excerpt: string,
	body: any,
	tags: Array<Tag>,
	_id: string
}

export interface Tag{
	_id: string,
	name: string,
	slug: {current: string},
	postCount?: number,
	contentCount?: number,
}

// Definición de los tipos para las referencias
interface Reference {
  _type: 'reference';
  _ref: string;
}

// Definición de los tipos para las imágenes
interface Image {
  _type: 'image';
  asset: Reference;
  alt?: string;
}

// Definición del tipo para los bloques de contenido
interface Block {
  _type: 'block' | 'image';
  children?: Array<{ text: string }>; // Ajustar según la estructura de los bloques de texto
  asset?: Reference;
  alt?: string;
}


// Definición de los tipos para los dueños
export interface Owner {
  _id: string;
  name: string;
	slug: {current: string},
	contact:string;
	houseCount?: number,
}

export interface House {
	_id: string;
	_type: 'house';
  title: string;
  slug: {
    current: string;
    _type: 'slug';
  };
  description: string;
  excerpt: string;
  coverImage: Image;
  gallery: Image[];
  publishedAt: string;
  body: any;
  capacity: number;
  owner: Owner; // Referencia a un documento de tipo 'owner'
  tags: Array<Tag>; // Referencias a documentos de tipo 'tag'
}
