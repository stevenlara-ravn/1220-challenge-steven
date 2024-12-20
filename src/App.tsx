import CharacterInfoCard from "./components/CharacterInfoCard"
import CharactersList from "./components/CharactersList"

function App() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-row justify-start items-center w-full h-[59px] px-[33px] py-4 sticky top-0 z-10 bg-ravn-black">
        <p className="text-gray-6 font-bold text-[17px]">Ravn - Rick and Morty Registry</p>
      </div>

      <div className="flex flex-row w-full h-full">
        <aside className="flex justify-center items-center w-[350px] h-screen border-r-gray-300 border-solid border-r-[1px]">
          <CharactersList />
        </aside>

        <CharacterInfoCard />
      </div>
    </div >
  )
}

export default App
