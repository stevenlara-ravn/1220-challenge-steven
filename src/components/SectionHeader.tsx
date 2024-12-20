export default function SectionHeader({ title }: { title: string }): JSX.Element {
  return (
    <div className="w-full h-[59px] pt-[32px] pb-[8px] px-4 flex">
      <h1 className="text-dark-gray text-[17px] font-bold">{title}</h1>
    </div>
  )
}