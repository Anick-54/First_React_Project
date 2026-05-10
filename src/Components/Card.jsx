

export const Card = ({className, ImgSrc, heading, para}) => {
  return (
    <div className={`${className} py-32 px-24 items-center`}>
        <img src={ImgSrc} alt="" />
        <h2 className="text-[36px] w-[267px] text-center ">{heading}</h2>
        <p className="w-[251px] text-center">{para}</p>
    </div>
  )
}
