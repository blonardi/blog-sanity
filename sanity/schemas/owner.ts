import { Rule } from 'sanity'

export const owner = {
  name: 'owner',
  title: 'Dueño/Entidad',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name'
      }
    },
    {
      name: 'contact',
      title: 'Información de Contacto',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    }
  ]
}
