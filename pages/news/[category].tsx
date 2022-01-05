import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import * as cookie from 'cookie'

const NewsByCategory: NextPage = ({ articles }: any) => {
  const { query } = useRouter()
  return (
    <>
      <h1>List of News Articales {query.category}</h1>
      {articles.map((article: any, index: number) => {
        return (
          <div key={index}>
            <h2>
              {article.id} {article.title} | {article.category}
            </h2>
          </div>
        )
      })}
    </>
  )
}

export default NewsByCategory

export async function getServerSideProps(context: any) {
  const { params, req, res, query } = context

  console.log(query)
  if (req.headers.cookie) {
    const { name } = cookie.parse(req.headers.cookie)

    console.log(name)
  }
  res.setHeader('Set-Cookie', ['name=Nghia'])

  const response = await fetch(`http://localhost:4000/news?category=${params.category}`)
  const data = await response.json()

  return {
    props: {
      articles: data,
    },
  }
}
