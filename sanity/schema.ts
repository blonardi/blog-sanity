import { type SchemaTypeDefinition } from 'sanity'
import { post } from './schemas/post'
import { author } from './schemas/author'
import { tag } from './schemas/tag'
import { house } from './schemas/house'
import { owner } from './schemas/owner'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, house, owner, tag]
}
