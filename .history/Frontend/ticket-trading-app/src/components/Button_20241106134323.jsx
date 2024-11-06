const Button = ({ 
    children, 
    variant = 'primary', 
    size = 'md',
    className = '',
    ...props 
  }) => {
    const baseStyles = 'rounded-lg font-medium transition-colors duration-200';
    
    const variants = {
      primary: 'bg-primary-600 text-white hover:bg-primary-700',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50'
    };
  
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    };
  
    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  
  export default Button;