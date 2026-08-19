import { motion } from "motion/react";

export default function DraggableCrad() {
  return (
    <div className="drag-container">
      <motion.div
        className="text-3xl bg-white text-black p-5 rounded-2xl"
        drag
        dragConstraints={{left: -100, right: 100, top: 0, bottom: 0}}
        dragElastic={0.2}
      >
        my wallet !
      </motion.div>
    </div>
  );
}
