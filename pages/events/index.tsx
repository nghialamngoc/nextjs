import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'

const EventList = ({ eventList }: any) => {
  const [events, setEvents] = useState(eventList)
  const router = useRouter()

  const sportFilter = async () => {
    const res = await fetch(`http://localhost:4000/events?category=sport`)
    const data = await res.json()
    setEvents(data)
    router.push('/events?category=sport', undefined, { shallow: true })
  }

  return (
    <>
      <h1>List of events</h1>
      <button onClick={sportFilter}>Sport Filter</button>
      {events.map((event: any, index: number) => {
        return (
          <div key={index}>
            <h2>
              {event.id} {event.title} | {event.category}
            </h2>
            <p>{event.desc}</p>
            <hr></hr>
          </div>
        )
      })}
    </>
  )
}

export async function getServerSideProps(context: any) {
  const { query } = context
  const { category } = query
  console.log("run");
  

  let url = `http://localhost:4000/events`
  if (category) {
    url = url + `?category=${category}`
  }
  const res = await fetch(url)
  const data = await res.json()

  return {
    props: {
      eventList: data,
    },
  }
}

export default EventList
