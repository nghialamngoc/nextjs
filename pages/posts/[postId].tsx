import { GetStaticPropsContext, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

interface PostProps {
  data: any
}

interface Params extends ParsedUrlQuery {
  postId: string
}

const PostDetail: NextPage<PostProps> = ({ data }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <p>{data.id}</p>
      <p>{data.title}</p>
      <p>{data.price}</p>
      <p>{data.description}</p>
      <Link href="/posts">
        <a>Post</a>
      </Link>
    </div>
  )
}

export default PostDetail

export async function getStaticPaths() {
  const res = await fetch('http://localhost:4000/posts')
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
    fallback: true,
  }
}

export async function getStaticProps(context: GetStaticPropsContext<Params>) {
  const { params } = context
  let data: any = {}
  if (params) {
    console.log(`Generating / Regenerating ${params.postId}`)
    const response = await fetch(`http://localhost:4000/posts/${params.postId}`)
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
    revalidate: 10,
  }
}
