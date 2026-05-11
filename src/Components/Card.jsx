

export const Card = ({className, ImgSrc, heading, para}) => {
  return (
    <div className={`${className} py-6 px-8 w-80  `}>
        <img src={ImgSrc} alt="" className="mx-auto" />
        <h2 className="text-[36px] w-[267px] text-center ">{heading}</h2>
        <p className="w-[280px] text-center">{para}</p>
    </div>
  )
}
