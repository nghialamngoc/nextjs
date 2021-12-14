import { NextPage } from 'next'
import { UserProps } from '../../interface/user'

const User: NextPage<UserProps> = ({ data }) => {
  return (
    <div key={data.id}>
      <p>{data.name}</p>
      <p>{data.email}</p>
    </div>
  )
}

export default User
