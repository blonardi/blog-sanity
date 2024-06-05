import { type SchemaTypeDefinition } from 'sanity'
import { post } from './schemas/post'
import { author } from './schemas/author'
import { tag } from './schemas/tag'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, tag]
}
