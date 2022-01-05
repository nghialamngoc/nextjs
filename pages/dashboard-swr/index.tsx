import useSWR from 'swr'
// https://swr.vercel.app/docs/options

const fetcher = async () => {
  const res = await fetch('http://localhost:4000/dashboard')
  const data: any = await res.json()
  return data
}

const DashboardSWR = () => {
  const { data, error } = useSWR('dashboard', fetcher, {
    onSuccess: (data, key, config) => {
      console.log(data, key, config)
    },
  })
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div>
      <p>Posts: {data?.posts}</p>
      <p>Posts: {data?.likes}</p>
    </div>
  )
}

export default DashboardSWR
