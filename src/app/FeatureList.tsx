import { motion } from "motion/react";

const feats = ["fast", "crazy fast", "blazingly fast"];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 5} },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FeatureList() {
  return (
    <motion.ul
      className="text-3xl font-bold"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {feats.map((feat) => (
        <motion.li key={feat} className="mt-4" variants={item}>
          {feat}
        </motion.li>
      ))}
    </motion.ul>
  );
}
