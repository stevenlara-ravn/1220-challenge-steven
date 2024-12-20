import { gql, useQuery } from "@apollo/client"

const getCharacters = gql`
  query {
  characters {
    results {
      id
      name
      image
      status
    }
  }
  }
`

function App() {
  const { loading, error, data } = useQuery(getCharacters)

  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  console.log(data);
  
  
  return (
      <h1>Hello Vite!</h1>
  )
}

export default App
