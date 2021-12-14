import { GetStaticPropsContext, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Link from 'next/link'

interface PostProps {
  data: any
}

interface Params extends ParsedUrlQuery {
  postId: string
}

const PostDetail: NextPage<PostProps> = ({ data }) => {
  return (
    <div>
      <p>{data.id}</p>
      <p>{data.title}</p>
      <p>{data.body}</p>
      <Link href="/posts">
        <a>Post</a>
      </Link>
    </div>
  )
}

export default PostDetail

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  const paths = posts.slice(0, 3).map((post: any) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps(context: GetStaticPropsContext<Params>) {
  const { params } = context

  let data: any = {}
  if (params) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    data = await response.json()

    if (!data.id) {
      return {
        notFound: true,
      }
    }
  }

  return {
    props: {
      data: data,
    },
  }
}
