import LoadingSpinner from "./LoadingSpinner";

export default function LoadingCell(): JSX.Element {
  return (
    <div className="p-4 w-full flex justify-center items-center gap-10">
      <LoadingSpinner /> <p className="text-light-gray text-[17px] tracking-[1.25px] font-bold inline">Loading</p>
    </div>
  )
}