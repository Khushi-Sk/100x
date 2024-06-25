import PropTypes from 'prop-types';

function Button({children, size='md', wh='normal', disabled=false, variant='default', ...rest} ) {
    const base = 'rounded-full shadow-2xl backdrop-blur-xl flex justify-center items-center py-2 px-6 self-stretch gap-2.5 not-italic font-bold leading-normal'
    
    const sizeStyle = {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
    }
    
    // width heigth = wh
    const widthHeight = {
      long:'w-[360px] w-96 ',
      medium:'w-80 h-11',
      normal: 'w-32 h-9',
      small:'w-72',
      xSmall:'w-20 h-10'
    }

    const variantStyles = {
      outline: 'bg-black border border-solid border-twitter-blue text-twitter-blue hover:bg-twitter-blue-hover hover:text-slate-50',
      default: 'bg-neutral-50 hover:bg-neutral-200',
      primary: 'bg-twitter-blue-disabled text-neutral-400 hover:bg-twitter-blue-hover hover:text-neutral-50',
         edit: 'text-neutral-50 border-twitter-blue border mx-3 my-2 inline-flex font-normal'
    }
  
    const disabledStyle = disabled ? "cursor-not-allowed pointer-events-none opacity-50 pointer-events" : '';
  
    const classes = `${base} ${sizeStyle[size]} ${widthHeight[wh]} ${variantStyles[variant]} ${disabledStyle} `
  
    return (
    <>
      <button className={classes} {...rest}>
        {children}
      </button> 
    </>
    );
  }

Button.propTypes = {
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(["sm","md", "lg"]).isRequired,
    variant: PropTypes.oneOf(["default", "outline", "primary", "edit"]).isRequired,
    widthHeight: PropTypes.oneOf(["long", "medium", "normal", "small", "xSmall"]),
    // text: PropTypes.string.isRequired,
}

export default Button