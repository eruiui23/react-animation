"use client";
import { motion, scale } from "motion/react";

interface ButtonProps {
  duration?: number;
  scale?: number;
}

function Button({ duration, scale }: ButtonProps) {
  return (
    <>
      <motion.button
        className="text-3xl mt-20 bg-amber-500"
        whileHover={{ scale }}
        transition={{ duration }}
      >
        test me
      </motion.button>
    </>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 5 }}
      >
        <h1 className="text-7xl">yahalo</h1>
      </motion.div>
      <Button duration={0.5} scale={9.2}></Button>
    </div>
  );
}
