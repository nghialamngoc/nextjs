import { useEffect, useState } from 'react'

const Dashboard = () => {
  const [loading, setLoading] = useState(false)
  const [dashboardData, setDashboardData] = useState<any>(null)

  useEffect(() => {
    async function fetchDashboardData() {
      setLoading(true)
      const res = await fetch('http://localhost:4000/dashboard')
      const data: any = await res.json()

      setDashboardData(data)
      setLoading(false)
    }
    fetchDashboardData()
  }, [])
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <p>Posts: {dashboardData?.posts}</p>
          <p>Posts: {dashboardData?.likes}</p>
        </div>
      )}
    </>
  )
}

export default Dashboard
