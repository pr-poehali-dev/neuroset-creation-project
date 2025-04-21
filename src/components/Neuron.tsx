import { cn } from "@/lib/utils";

interface NeuronProps {
  className?: string;
}

export const Neuron = ({ className }: NeuronProps) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary", className)}
    >
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      <path d="M12 5V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 21V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M21 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18.364 5.63604L16.9497 7.05025" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M7.05029 16.9497L5.63608 18.3639" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16.9497 16.9497L18.364 18.364" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5.63608 5.63604L7.05029 7.05025" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 3" />
    </svg>
  );
};
