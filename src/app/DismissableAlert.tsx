import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function DismissableAlert() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <button onClick={() => setOpen((o) => !o)}>Toggle alert</button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="alert"
          >
            This is an animated alert.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
