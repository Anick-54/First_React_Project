import banner from'../assets/banner.png'
import { Button } from './Button'

export const Banner = () => {
  return (
    <div className='flex justify-between mt-[96px] px-80 items-center bg-[#F5F7FA]'>
        <div>
          <h1 className='mb-4 text-6xl w-[657px] font-bold'>Lessons and insights <span className='text-[#4CAF4F]'>from 8 years</span></h1>
          <p className='leading-10 text-[#717171]'>Where to grow your business as a photographer: site or social media?</p>
          <Button className="bta mt-8 text-black hover:bg-green-700 ">Register</Button>
        </div>  
        <div>
            <img src={banner} alt="" />
        </div>
    </div>
  )
}
