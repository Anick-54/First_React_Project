import { Container } from "./Container"
import Tesla from "../assets/Tesla.png"
import cl1 from "../assets/1.png"
import cl2 from "../assets/2.png"
import cl3 from "../assets/3.png"
import cl4 from "../assets/4.png"
import cl5 from "../assets/5.png"
import cl6 from "../assets/6.png"
import cl7 from "../assets/7.png"
import { FaLongArrowAltRight } from "react-icons/fa";
import { SecHead } from "./SecHead"




export const Tim = () => {
  return (
    <div className="bg-[#F5F7FA] mt-12 mb-12"> 
        <Container>
            <div className="flex gap-[78px]">
                <div>
                    <div>
                        <img src={Tesla} alt="" />
                    </div>
                </div>
                <div className="w-[748px]">
                    <div>
                        <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna. 
                        </p>
                        <span className="mt-4 text-[#4CAF4F] text-[28px] mb-2">Tim Smith</span>
                        <p>British Dragon Boat Racing Association</p>
                    </div>
                    <div className="flex gap-[25px] mt-10 items-center">
                        <div>
                            <a href="#"><img src={cl1} alt="" /></a>
                        </div>
                        <div>
                            <a href="3"><img src={cl2} alt="" /></a>
                        </div>
                        <div>
                            <a href="#"><img src={cl3} alt="" /></a>
                        </div>
                        <div>
                            <a href="#"><img src={cl4} alt="" /></a>
                        </div>
                        <div>
                            <a href="#"><img src={cl5} alt="" /></a>
                        </div>
                        <div>
                            <a href="#"><img src={cl6} alt="" /></a>
                        </div>
                        <div>
                            <a href="#"><img src={cl7} alt="" /></a>
                        </div>
                        <div className="flex items-center gap-2 text-[#4CAF4F] text-[20px]">
                            <a href="#"><span>Meet all customers </span></a>
                           <a href="#"> <FaLongArrowAltRight /></a>
                        </div>
                    </div>
                </div>
            </div>
            <SecHead className="mt-12">
                <h2 className="text-4xl pb-2">Caring is the new marketing</h2>
                <p className="w-[628px] mx-auto text-4">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </SecHead>
        </Container>
    </div>
  )
}
