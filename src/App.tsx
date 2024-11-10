import "./styles.css";
import { motion } from "framer-motion";

export default function App() {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: -1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -0.1, right: 100 }}
    />
  );
}
