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

interface ImageReference {
  _ref: string;
  _type: 'reference';
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

interface SanityImage {
  _ref: string;
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface ImageAsset {
  _ref: string;
  _type: 'reference';
}
export interface GalleryImage {
  _type: string; // Tipo de la imagen (ej. 'image')
  _key: string; // Clave única de la imagen
  asset: {
    _ref: string;
		_type: string; // Referencia al asset de la imagen en Sanity
    // Puedes añadir más propiedades si son necesarias, como 'type', 'metadata', etc.
  };
	alt?: string;
  // Puedes incluir otras propiedades específicas de las imágenes en la galería según lo que necesites
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
  coverImage: SanityImage;
  gallery: GalleryImage[];
  publishedAt: string;
  body: any;
  capacity: number;
  owner: Owner; // Referencia a un documento de tipo 'owner'
  tags: Array<Tag>; // Referencias a documentos de tipo 'tag'
}
