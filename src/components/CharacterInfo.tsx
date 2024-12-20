import DataCell from "@/components/DataCell";
import { Info } from "@/gql/graphql";

export default function CharacterInfo({ data }: { data: Info[] }): JSX.Element {
  return (
    <ul>
      {
        data.map((infoItem: Info) => (
          <DataCell key={infoItem.key} infoType={infoItem.key} infoValue={infoItem.value} />
        ))
      }
    </ul>
  )
}