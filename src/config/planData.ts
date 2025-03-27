import { PlansData } from "../types";

export const planData: PlansData = [
  {
    id: 1,
    title: "Só por hobby",
    price: "Grátis",
    subTitle: "Incluso:",
    features: [
      "100 mini projetos para resolver",
      "1 workshop gratuito",
      "10+ APIS para acesso de requests"
    ],
    buttonText: "CONTINUAR"
  },
  {
    id: 2,
    title: "Plano PRO",
    price: "R$ 29,90",
    subTitle: "Tudo do plano grátis e mais:",
    features: [
      "1000 mini projetos para resolver",
      "Comunidade exclusiva para dúvidas",
      "40 workshops atualizados para assistir",
    ],
    buttonText: "COMECE AGORA"
  },
  {
    id: 3,
    title: "Empresas",
    price: "R$ 49,90",
    subTitle: "Tudo do plano grátis e mais:",
    features: [
      "Assessoria excolusiva para dúvidasa",
      "Criação de planos de estudos",
      "Lives semanais de novas tecnologias",
    ],
    buttonText: "COMECE AGORA"
  }
]