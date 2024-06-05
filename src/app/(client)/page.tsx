import {client} from '../../../sanity/lib/client'
import { Header } from '../components/Header'
import { PostComponent } from '../components/PostComponent'
import { Post } from '../utils/Interface'

async function getPosts() {
	const query = `
	*[_type =="post"] {
		title,
		slug,
		publishedAt,
		excerpt,
		tags[]->{
			_id,
			slug,
			name
		}
	}
	`
	const data = await client.fetch(query)
	return data
}

//nextjs, automatically does the caching for us
export const revalidate = 60;

export default async function Home() {
	const posts: Array<Post> = await getPosts()
	//console.log("posts", posts)
  return (
    <section>
			<Header title="Articles" tags/>
			<div>
				{posts?.length > 0 && posts?.map((post) => (
					<PostComponent key={post._id} post={post} />
				))}
			</div>
		</section>
  );
}
