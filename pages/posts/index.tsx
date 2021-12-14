import { NextPage } from 'next'
import Link from 'next/link'

interface PostListProps {
  data: Array<any>
}

const PostList: NextPage<PostListProps> = ({ data }) => {
  return (
    <>
      <div>Post list</div>
      {data.map((post) => {
        return (
          <div key={post.id}>
            <Link
              href={{
                pathname: '/posts/[postId]',
                query: { postId: post.id },
              }}
            >
              <a>{post.id}</a>
            </Link>
            <p>{post.title}</p>
            <br></br>
          </div>
        )
      })}
    </>
  )
}

export default PostList

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  return {
    props: {
      data: data,
    },
  }
}
