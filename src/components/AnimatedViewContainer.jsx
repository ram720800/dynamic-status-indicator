import { motion, AnimatePresence } from "framer-motion";

const varients = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};
const AnimatedViewContainer = ({ viewMode, children }) => {
  return (
    <div className="absolute top-56 flex flex-col items-center justify-between gap-6 w-full">
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
