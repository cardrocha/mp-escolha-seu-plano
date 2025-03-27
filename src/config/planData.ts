import { PlanData } from "../types";

export const plansData: PlanData[] = [
  {
    id: 1,
    title: "Só por hobby",
    price: { 
      original: "Grátis",
      discount: "Grátis" 
    },
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
    price: {
      original: "R$ 29,90",
      discount: "R$ 23,92",
      anual: "R$ 287,04"
    },
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
    price: { 
      original: "R$ 49,90",
      discount: "R$ 39,92",
      anual: "R$ 479,04"
    },
    subTitle: "Tudo do plano grátis e mais:",
    features: [
      "Assessoria excolusiva para dúvidasa",
      "Criação de planos de estudos",
      "Lives semanais de novas tecnologias",
    ],
    buttonText: "COMECE AGORA"
  }
]