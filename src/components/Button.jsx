export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-primary hover:bg-primary-light text-white shadow-glow hover:shadow-glow-lg",
    secondary: "bg-surface-light hover:bg-surface text-white border border-surface-border hover:border-primary/50",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary/10"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}