import { ArrowRight, Check } from "lucide-react";
import { planData } from "../config/planData";

export function PlansBox() {
  return (
    <div className="flex gap-7">
      {planData.map((item) => (
        <div key={item.id} className="inline-flex flex-col bg-black border-2 border-gray-500 p-5 rounded-2xl">
          <div className="flex gap-3 flex-col bg-background border-2 border-gray-500 py-12 px-10 w-[328px] rounded-md">
            <h2 className="font-indieFlower text-xl text-amber-400">{item.title}</h2>
            <p className="font-bold text-4xl text-white">
              {item.price}
              {item.id !== 1 && <span className="text-xl font-light"> /mês</span>}
            </p>
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
            <button className={`flex items-center gap-1.5 bg-violet-900 text-white whitespace-nowrap py-1.5 px-4 rounded-xs cursor-pointer ${item.id === 1 ? "w-[136px]" : "w-[160px]"}`}>
              <ArrowRight size={15} className="bg-white text-violet-900 rounded-full" />
              {item.buttonText}
            </button>
          </div>
        </div>
      ))}

    </div>
  );
}
