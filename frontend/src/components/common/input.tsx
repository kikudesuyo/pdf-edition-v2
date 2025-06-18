import React from "react";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  className = "",
  disabled = false,
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      className={`w-full rounded-lg border border-slate-300/50 bg-white/10 px-4 py-3 font-semibold text-white placeholder-slate-400 backdrop-blur-sm transition-all duration-200 focus:border-blue-400 focus:bg-white/15 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    />
  );
};

export default Input;
