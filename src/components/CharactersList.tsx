import { gql, useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { Character } from "../gql/graphql"
import LoadingCell from "./LoadingCell"
import NoticeCell from "./NoticeCell"
import PersonCell from "./PersonCell"


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

  const { loading, error, data } = useQuery(getCharacters)

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