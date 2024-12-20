// @ts-nocheck
import { ChevronRight } from "lucide-react";
import { Character } from "../gql/graphql";
import { characterId } from '../stores/characterInfo.ts';

export default function PersonCell({ character }: { character: Character }): JSX.Element {
  const getCharacterInfo = (character: Character) => {
    characterId(character.id);
  }

  return (
    <>
      <div className="flex flex-col p-4 max-w-[307px] w-full">
        <h2 className="font-bold text-[17px]">{character.name}</h2>
        <p className="font-normal text-sm tracking-[1.25px] text-light-gray">{character.status}</p>
      </div>

      <button
        className="mr-4 hover:bg-gray-200 rounded-full"
        onClick={() => getCharacterInfo(character)}
      >
        <ChevronRight width={24} height={24} />
      </button>
    </>
  )
}