import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle } from "lucide-react";

export const statusIcons = {
  warning: (
    <motion.span
    initial={{ scale: 1 }}
    animate={{ 
      x: [0, -2, 2, 0]
    }}
    transition={{ 
      repeat: Infinity, 
      duration: 0.2,
      repeatType: "loop",
      times: [0, 0.5, 1],
      ease: "linear" 
    }}
    className="inline-flex"
    >
      <AlertTriangle className="w-6 h-6 mr-2 text-[#ff2323]" strokeWidth={2} />
    </motion.span>
  ),
  safe: (
    <motion.span
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ 
      scale: [0.5, 1.2, 1],
      opacity: [0, 1, 1]
    }}
    transition={{ 
      duration: 0.6,
      times: [0, 0.6, 1],
      ease: "backOut",
      repeatDelay: 1,
      repeat: Infinity
    }}
    className="inline-flex"
    >
      <CheckCircle2 className="w-6 h-6 mr-2 text-[#00b800]" strokeWidth={2} />
    </motion.span>
  ),
};
