import Content from "../components/content"
import { getAllNews } from '../lib/news'
import Heading from "../components/heading"
import News from "../components/News"

export async function getStaticProps() {
  const news = getAllNews()
  return {
    props: {
      news
    }
  }
}

export default function NewsPage({ news }) {
  return(
    <Content>
      <Heading
        title="News"
        lead="Up to date news from The Gunaratnam Lab!"
      />
      <div className="bg-white overflow-hidden">
        <News posts={news} />
      </div>
    </Content>
  )
}

