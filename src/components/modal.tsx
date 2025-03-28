import { useState } from "react";

type ModalProps = {
  setOpenModal: (value: boolean) => void;
  planChoice: string
};

export function Modal({ setOpenModal, planChoice }: ModalProps) {
  const [selectedModal, setSelectedModal] = useState(true);

  const HandleButtonBack = () => {
    setSelectedModal(false);
    setOpenModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex justify-center items-center">
      <div className="bg-black p-10 rounded-lg border-2 border-background-light">
        {selectedModal ? (
          <>
            <p className="text-2xl font-bold text-white">Deseja confirmar a escolha?</p>
            <p className="text-xl font-bold text-white">
              Plano escolhido: <span className="text-xl font-bold text-amber-600">{planChoice}</span>
            </p>
          </>
        ) : (
          <p className="text-2xl font-bold text-white">Parabéns pela escolha!</p>
        )}

        <div className="flex items-center justify-center gap-1">
          {selectedModal ? (
            <>
              <button
                title="clique aqui"
                onClick={() => setSelectedModal(false)}
                className="bg-violet-900 hover:bg-violet-950 transition-colors duration-200 text-white py-2 px-4 rounded-md mt-5 cursor-pointer"
              >
                Sim
              </button>
              <button
                title="clique aqui"
                onClick={() => setOpenModal(false)}
                className="bg-violet-900 hover:bg-violet-950 transition-colors duration-200 text-white py-2 px-4 rounded-md mt-5 cursor-pointer"
              >
                Não
              </button>
            </>
          ) : (
            <button
              title="clique aqui"
              onClick={HandleButtonBack}
              className="bg-violet-900 hover:bg-violet-950 transition-colors duration-200 text-white py-2 px-4 rounded-md mt-5 cursor-pointer"
            >
              Voltar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
