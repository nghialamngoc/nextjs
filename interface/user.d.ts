export interface IUser {
  id: number
  name: string
  email: string
}

export interface UserProps {
  data: IUser
}

export interface UserListProps {
  data: Array<IUser>
}
