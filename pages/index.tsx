import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      This is home page
      <br></br>
      <Link href="/user">
        <a>User</a>
      </Link>
      <Link href="/posts">
        <a>Post</a>
      </Link>
    </div>
  )
}

export default Home
