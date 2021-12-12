import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

const Blogs: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <div>This is blog page {JSON.stringify(router.query.aa)}</div>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  )
}

export default Blogs
