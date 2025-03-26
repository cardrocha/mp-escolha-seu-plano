export function PlansBox() {
  return (
    <div className="inline-flex flex-col bg-black border-2 border-gray-500 p-5 rounded-2xl">
      <div className="flex gap-3 flex-col bg-black border-2 border-gray-500 py-12 px-10 w-[328px] rounded-md">
        <h1 className="font-indieFlower text-xl text-amber-400">Só por hobby</h1>
        <span className="font-bold text-[44px] text-white">Grátis</span>
        <hr className="text-gray-700" />
        <h3 className="text-xl text-white font-bold">Incluso:</h3>
        <ul className="flex flex-col gap-2.5">
          <li className="text-xxs font-light text-white">100 mini projetos para resolver</li>
          <li className="text-xxs font-light text-white">1 workshop gratuito</li>
          <li className="text-xxs font-light text-white">10+ APIS para acesso de requests</li>
          <button className="bg-purple-800 text-white w-[136px] py-1.5 px-4 rounded-xs">CONTINUAR</button>
        </ul>
      </div>
    </div>
  )
}