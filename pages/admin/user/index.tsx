import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Link from 'next/link'

const AdminUser: NextPage = () => {
  const router = useRouter()
  const goToLogin = () => {
    router.push({
      pathname: 'user/detail/[id]',
      query: { id: 1, enable: true },
    })
  }

  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <button onClick={goToLogin}>Go to Detail</button>
      <Link
        href={{
          pathname: 'user/detail/[id]',
          query: { id: 1, enable: true },
        }}
        replace
      >
        <a>Home</a>
      </Link>
    </>
  )
}

export default AdminUser
