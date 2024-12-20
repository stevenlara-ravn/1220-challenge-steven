export default function DataCell({
  infoType,
  infoValue
}: {
  infoType: string,
  infoValue: string
}
): JSX.Element {
  return (
    <li className="p-4 w-full flex justify-between items-center gap-4 border-b-gray-300 border-solid border-b-[1px]">
      <p className="text-light-gray">{infoType}</p>
      <p className="text-dark-gray">{infoValue}</p>
    </li>
  )
}