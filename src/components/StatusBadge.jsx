import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { statusIcons } from "@/components/ui/statusIcon";
import { Loader2 } from "lucide-react";
const statusStates = [
  {
    label: "Analyzing Transaction",
    color: "#e8f1ff",
    text: "#2f45ff",
    icon: (
      <Loader2
        className="animate-spin w-6 h-6 mr-2 text-[#2f45ff]"
        strokeWidth={3}
      />
    ),
  },
  {
    label: "Transaction Warning",
    color: "#fff0f0",
    text: "#ff2323",
    icon: statusIcons.warning,
  },
  {
    label: "Transaction Safe",
    color: "#e9ffe4",
    text: "#00b800",
    icon: statusIcons.safe,
  },
];

export default function AnimatedStatusButton() {
  const [statusIndex, setStatusIndex] = useState(null);

  const handleClick = () => {
    setStatusIndex(0);
    setTimeout(() => setStatusIndex(1), 4000);
    setTimeout(() => setStatusIndex(2), 9000);
  };

  const currentStatus = statusStates[statusIndex];

  return (
    <motion.button
      onClick={handleClick}
      className={`px-6 py-3 font-semibold rounded-full transition-all shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5 flex items-center justify-center cursor-pointer bg-white`}
      style={{
        backgroundColor: currentStatus ? currentStatus.color : "wl1",
        color: currentStatus ? currentStatus.text : "text-bl1",
      }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={statusIndex ?? "default"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex items-center"
        >
          {currentStatus ? (
            <>
              {currentStatus.icon}
              {currentStatus.label}
            </>
          ) : (
            "Proceed Transaction"
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
