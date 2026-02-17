import { AuthInputProps } from "@/app/types/UI";
import { motion } from "framer-motion";
const AuthInput = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: AuthInputProps) => (
  <div className="space-y-1">
    <label className="text-sm font-medium text-muted-foreground">{label}</label>

    <motion.input
      whileFocus={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full rounded-lg border border-border bg-background px-3 py-2 outline-none focus:border-[rgb(var(--neon-cyan))] transition-colors"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default AuthInput;
