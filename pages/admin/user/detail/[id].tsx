import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'

const AdminUser: NextPage = () => {
  const router = useRouter()
  const id = router.query.id
  const goToLogin = () => {
    router.push('/login')
  }

  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <h1>Admin User {id}</h1>
      <button onClick={goToLogin}>Go to Login Page</button>
    </>
  )
}

export default AdminUser
