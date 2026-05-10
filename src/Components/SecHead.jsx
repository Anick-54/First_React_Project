

export const SecHead = ({children, className, heading, para}) => {
  return (
    <div className={`${className} text-center mx-auto`}>
        <h2 className="w-[700px] text-[44px] mx-auto">{heading}</h2>
        <p>{para}</p>
        {children}

    </div>
  )
}
