import { motion, AnimatePresence } from 'framer-motion';
export const Transition = ({ children }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);
