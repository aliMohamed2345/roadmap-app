import { motion } from "framer-motion";
import { AuthSubmitButtonProps } from "@/app/types/UI";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const AuthSubmitButton = ({ text, onHandleSubmit ,loading}: AuthSubmitButtonProps) => (
  <motion.button
    onClick={onHandleSubmit}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.97 }}
    className="w-full cursor-pointer py-2.5 rounded-xl font-semibold text-white bg-linear-to-br from-neon-cyan to-neon-purple shadow-lg shadow-neon-cyan/25"
  >
   {!loading?text:<AiOutlineLoading3Quarters className="animate-spin text-white mx-auto" size={22}/>}
  </motion.button>
);

export default AuthSubmitButton;
