import { motion, AnimatePresence } from "framer-motion";

const varients = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};
const AnimatedViewContainer = ({ viewMode, children }) => {
  return (
    <div className="flex flex-col items-center w-full gap-4 sm:mt-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={viewMode}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={varients}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedViewContainer;
