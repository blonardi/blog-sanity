import { Rule } from 'sanity'

export const house = {
  name: 'house',
  title: 'Casa de Alquiler/Complejo Turístico',
  type: 'document',
  //title,
  //address,
  //type,
  //location,
  //author,
  //coverImage
  //imgsForCarousel
  fields: [
    {
      name: 'title',
      title: 'Titulo',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Required')
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule: Rule) => Rule.required().error('Required')
    },
    {
      name: 'description',
      title: 'Descripcion',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().error('Required')
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: (Rule: Rule) => Rule.max(200).error('Max 200 characters')
    },
    {
      name: 'coverImage',
      title: 'Imagen de Portada',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule: Rule) => Rule.required().error('Required')
    },
    {
      name: 'gallery',
      title: 'Galería de Imágenes',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid'
      }
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', fields: [{ type: 'text', name: 'alt', title: 'Alt' }] }
      ]
    },
    {
      name: 'capacity',
      title: 'Capacidad (Número de Huéspedes)',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().min(1)
    },
    {
      name: 'owner',
      title: 'Dueño/Entidad',
      type: 'reference',
      to: [{ type: 'owner' }]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
      validation: (Rule: Rule) => Rule.required().min(1)
    }
  ]
}
