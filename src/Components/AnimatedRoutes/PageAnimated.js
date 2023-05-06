import React from "react";
import { motion } from "framer-motion";


export const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

export const itemVariants = {
  hidden: { opacity: 0, y: 5 },
  visible,
};

export function PageAnimated({ children }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      // exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      {children}
    </motion.div>
  );
}
