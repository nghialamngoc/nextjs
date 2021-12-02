import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'

const AdminUser: NextPage = () => {
  const router = useRouter()

  const goToLogin = () => {
    router.push('/login')
  }

  console.log(router)

  return (
    <>
      <Head>
        <title>User Detail</title>
      </Head>
      <h1>Admin User</h1>
      <button onClick={goToLogin}>Go to Login Page</button>
    </>
  )
}

export default AdminUser
