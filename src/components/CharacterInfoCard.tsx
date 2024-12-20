import CharacterInfo from "@/components/CharacterInfo";
import LoadingCell from "@/components/LoadingCell";
import NoticeCell from "@/components/NoticeCell";
import SectionHeader from "@/components/SectionHeader";
import { characterId } from "@/stores/characterInfo";
import { gql, useQuery, useReactiveVar } from "@apollo/client";

const getCharacterInfo = gql`
 query CharacterInfo($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      image
    }
  }
`

export default function CharacterInfoCard(): JSX.Element {
  const currentCharacterId = useReactiveVar(characterId);

  const { loading, error, data } = useQuery(getCharacterInfo, {
    variables: {
      id: currentCharacterId,
    },
  })

  if (loading) return <LoadingCell />
  if (error) return <NoticeCell />

  const dto = Object.entries(data?.character)
    .map(([key, value]) => ({ key, value }))
    .filter(({ key }) => !['__typename', 'image'].includes(key))

  return (
    <section className="flex flex-col justify-center items-center bg-zinc-200 w-full h-auto overflow-hidden">
      <main className="flex flex-col w-[900px] h-[600px] bg-white rounded-lg p-4 gap-10 shadow-md overflow-hidden">
        <figure>
          <img src={data?.character.image} alt="Rick" width={200} height={300} className="rounded-lg" />
        </figure>

        <div>
          <SectionHeader title="General Information" />
          <CharacterInfo data={dto} />
        </div>
      </main>
    </section>
  )
}