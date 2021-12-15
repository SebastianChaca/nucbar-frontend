import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const OpacityDiv = ({ children, open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpacityDiv;
