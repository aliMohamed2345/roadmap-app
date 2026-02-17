import { motion } from "framer-motion";
import { AuthSubmitButtonProps } from "@/app/types/UI";
const AuthSubmitButton = ({ text, onHandleSubmit }: AuthSubmitButtonProps) => (
  <motion.button
    onClick={onHandleSubmit}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.97 }}
    className="w-full cursor-pointer py-2.5 rounded-xl font-semibold text-white bg-linear-to-br from-neon-cyan to-neon-purple shadow-lg shadow-neon-cyan/25"
  >
    {text}
  </motion.button>
);

export default AuthSubmitButton;
