import axios from 'axios'

interface Article {
  id: number
  created_at: string
  author: string
  title: string
  url: string
  text: string | null
  points: number
}

interface ArticlesResponse {
  hits: Article[]
  page: number
  nbHits: number
  nbPages: number
  hitsPerPage: number
}

interface ArticlesRequestParams {
  page: number
  searchValue: string
}

export const getArticles = async ({ page, searchValue }: ArticlesRequestParams) => {
  const { data } = await axios.get<ArticlesResponse>('http://hn.algolia.com/api/v1/search', {
    params: {
      hitsPerPage: 10,
      // Тому що пагінація в АПІ починається з 0
      page: page - 1,
      query: searchValue,
    },
  })
  return data
}
