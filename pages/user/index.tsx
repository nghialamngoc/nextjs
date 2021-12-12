import { NextPage } from 'next'

const UserList: NextPage<UserListProps> = (props: UserListProps) => {
  const { data } = props
  return (
    <>
      <div>List of user</div>
      {data.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        )
      })}
    </>
  )
}

interface UserListProps {
  data: Array<any>
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
