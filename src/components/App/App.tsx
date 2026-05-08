import { useQuery } from '@tanstack/react-query'
import { getArticles } from '../../services/articles'
import { useState } from 'react'

import './pagination.css'

import ResponsivePagination from 'react-responsive-pagination'

const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const [page, setPage] = useState(0)

  const submit = (formData: FormData) => {
    const textFromInputSearch = formData.get('search') as string
    setSearchValue(textFromInputSearch)
    setPage(0)
  }

  const handleChangePage = (newPageNumber: number) => {
    setPage(newPageNumber)
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['Articles', searchValue, page],
    queryFn: () => getArticles({ page, searchValue }),
    enabled: searchValue !== '',
  })

  // const handleChangePage = ({ selected }: { selected: number }) => {
  //   setPage(selected)
  // }
  console.log('{data?.nbPages}', data?.nbPages)
  return (
    <div>
      <form action={submit}>
        <input type='text' name='search' />
        <button type='submit'>Search</button>
      </form>
      <hr />
      <hr />
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>OOps some error...</h1>}
      {data && data.hits.length > 0 && (
        <>
          <ul>
            {data.hits.map((article) => (
              <li key={article.id}>
                <a href={article.url}>{article.title}</a>
              </li>
            ))}
          </ul>
          <ResponsivePagination
            total={data.nbPages}
            current={page}
            onPageChange={handleChangePage}
            // inactiveItemClassName='inactiveItem'
          />
        </>
      )}

      <hr />
    </div>
  )
}

export default App

// import { useQuery } from '@tanstack/react-query'
// import { getSomePerson } from '../../services/api'
// import { useState } from 'react'

// const App = () => {
//   const [counter, setCounter] = useState(0)

//   const { data, isError, isLoading } = useQuery({
//     queryKey: ['getPerson', 'getPerson2', counter],
//     queryFn: () => getSomePerson(counter),
//     enabled: counter >= 1,
//   })

//   // getSomePerson
//   return (
//     <div>
//       <button onClick={() => setCounter(counter + 1)}>get person by ID: {counter}</button>
//       <br />
//       {isLoading && <p>loading...</p>}
//       {isError && <p>oops...</p>}
//       {JSON.stringify(data)}
//     </div>
//   )
// }

// export default App
