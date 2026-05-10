

export const Button = ({children, className}) => {
  return (
    <div>
        <button className={`${className} py-2.5 px-5 cursor-pointer rounded-[6px]  bg-[#4CAF4F] hover:bg-green-700 hover:text-white`}>
          {children}
        </button>
         

    </div>
  )
}
