import { ArrowRight, Check } from "lucide-react";
import { plansData } from "../config/planData";
import { useState } from "react";

export function PlansBox() {
  const [selectedPlan, setSelectedPlan] = useState(false);

  return (
    <>
      <div className="flex justify-center">
        <button title="clique aqui" onClick={() => setSelectedPlan(false)} className={`border-2 border-white rounded-lg py-1 px-6 text-sm text-white transition-colors cursor-pointer ${selectedPlan ? "bg-transparent hover:bg-gray-800" : "bg-gray-700 z-10"}`}>Mensal</button>
        <button title="clique aqui" onClick={() => setSelectedPlan(true)} className={`${selectedPlan ? "bg-gray-700" : "bg-transparent hover:bg-gray-800"} text-sm font-light text-amber-400 border-2 border-white rounded-lg py-1 px-6 -ml-2 transition-colors cursor-pointer`}>Anual (20% de desconto)</button>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-7 mt-7">
        {plansData.map((item) => (
          <div key={item.id} className="flex flex-col bg-black border-2 w-full h-full md:h-[402px] md:w-[368px] border-gray-500 p-5 rounded-2xl">
            <div className="flex gap-3 flex-col bg-background border-2 border-gray-500 py-12 px-10 w-full md:w-[328px] rounded-md h-full">
              <h2 className="font-indieFlower text-xl text-amber-400">{item.title}</h2>
              <p className="font-bold text-4xl text-white">
                <span>
                  {!selectedPlan ? item.price.original : item.price.discount}
                </span>
                {item.id !== 1 && <span className="text-xl font-light">
                  {!selectedPlan ? " /mês" : " 12x /mês"}
                </span>}
              </p>
              {item.id !== 1 &&
                (selectedPlan &&
                  <span className="text-sm text-amber-400">Preço total anual: {item.price.anual}</span>
                )
              }
              <hr className="text-gray-700" />
              <h3 className="text-xl text-white font-bold">{item.subTitle}</h3>
              <ul className="flex flex-col gap-2.5">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex gap-1 text-xxs font-light text-white">
                    <Check size={15} className="text-violet-800" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button title="escolha esse e comece já" className={`flex items-center gap-1.5 bg-violet-900 text-white whitespace-nowrap py-1.5 px-4 rounded-xs cursor-pointer ${item.id === 1 ? "w-[136px]" : "w-[160px]"}`}>
                <ArrowRight size={15} className="bg-white text-violet-900 rounded-full" />
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
