export interface PlanData {
  id: number;
  title: string;
  price: { original: string; discount?: string, anual?: string };
  subTitle: string;
  features: string[];
  buttonText: string;
}