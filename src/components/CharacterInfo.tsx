// @ts-nocheck
import DataCell from "./DataCell";

export default function CharacterInfo({ data }): JSX.Element {
  return (
    <ul>
      {
        data.map((infoItem) => (
          <DataCell key={infoItem.key} infoType={infoItem.key} infoValue={infoItem.value} />
        ))
      }
    </ul>
  )
}