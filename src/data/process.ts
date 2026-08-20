import { Search, Compass, Hammer, FlaskConical, Rocket, type LucideIcon } from "lucide-react";

export interface ProcessStep {
  id: string;
  translationKey: string;
  icon: LucideIcon;
  number: string;
}

export const processSteps: ProcessStep[] = [
  { id: "understand", translationKey: "understand", icon: Search, number: "01" },
  { id: "plan", translationKey: "plan", icon: Compass, number: "02" },
  { id: "build", translationKey: "build", icon: Hammer, number: "03" },
  { id: "test", translationKey: "test", icon: FlaskConical, number: "04" },
  { id: "deploy", translationKey: "deploy", icon: Rocket, number: "05" },
];
