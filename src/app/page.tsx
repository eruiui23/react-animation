"use client";
import { motion, scale } from "motion/react";
import ButtonAnimation from "./ButtonAnimation";
import FeatureList from "./FeatureList";
import DraggableCrad from "./DraggableCard";
import { DismissableAlert } from "./DismissableAlert";
import { StepSwitcher } from "./StepSwither";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <StepSwitcher/>
    </div>

  );
}
