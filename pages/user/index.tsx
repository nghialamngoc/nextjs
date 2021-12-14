import { NextPage } from 'next'
import User from '../../components/User'
import { UserListProps } from '../../interface/user'

const UserList: NextPage<UserListProps> = (props: UserListProps) => {
  const { data } = props
  return (
    <>
      <div>List of user</div>
      {data.map((user) => {
        return <User key={user.id} data={user}></User>
      })}
    </>
  )
}

export default UserList

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  return {
    props: {
      data,
    },
  }
}
