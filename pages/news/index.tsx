import { NextPage } from 'next'

const NewsList: NextPage = ({ articles }: any) => {
  return (
    <>
      <h1>List of News Articales</h1>
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

export default NewsList

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/news')
  const data = await response.json()

  return {
    props: {
      articles: data,
    },
  }
}
