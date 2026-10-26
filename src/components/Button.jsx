export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'px-6 py-3 rounded-none font-bold uppercase tracking-wide text-sm transition-all hover:opacity-90';
  const variants = {
    primary: 'bg-primary text-white',
    dark: 'bg-dark text-white hover:bg-gray-800',
    outline: 'border-2 border-dark text-dark hover:bg-dark hover:text-white',
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}