import LoadingCell from "@/components/LoadingCell"
import NoticeCell from "@/components/NoticeCell"
import PersonCell from "@/components/PersonCell"
import { Character } from "@/gql/graphql"
import { gql, useQuery } from "@apollo/client"
import { useEffect, useState } from "react"


const getCharacters = gql`
  query Characters ($page: Int) {
    characters( page: $page ) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        status
      }
    }
  }
`

export default function CharactersList(): JSX.Element {
  const [characters, setCharacters] = useState<Character[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  const { loading, error, data } = useQuery(getCharacters, {
    variables: {
      page: currentPage
    }
  })

  useEffect(() => {
    if (data?.characters.results) {
      setCharacters((prev) => [...prev, ...data.characters.results]);
    }
  }, [data]);

  if (loading) return <LoadingCell />
  if (error) return <NoticeCell />

  return (
    <ul className="w-full h-full overflow-y-scroll">
      {
        characters.map((character: Character) => (
          <li key={character.id} className="flex w-full justify-between items-center border-b-gray-300 border-solid border-b-[1px]">
            <PersonCell character={character} />
          </li>
        ))
      }
    </ul>
  )
}