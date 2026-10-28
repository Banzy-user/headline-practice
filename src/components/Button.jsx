export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'px-6 py-3 rounded-lg font-bold uppercase tracking-wide text-sm transition-all duration-300 inline-flex items-center justify-center gap-2';
  const variants = {
    primary: 'bg-primary text-white hover:bg-red-700 shadow-lg shadow-primary/20',
    dark: 'bg-surface-light text-white hover:bg-surface border border-white/10',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}