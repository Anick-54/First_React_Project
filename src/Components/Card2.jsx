import { Container } from "./Container"
import { FaLongArrowAltRight } from "react-icons/fa";



export const Card2 = () => {
  return (
    <div className="mt-[206px] mb-24">
        <Container>
            <div className="flex justify-between drop-shadow-xl/50 ">
                <div className="py-4 px-4 text-center  bg-[#F5F7FA] rounded-[8px]">
                    <h3 className="w-[250px] text-5">Creating Streamlined Safeguarding Processes with OneRen</h3>
                    <div className="text-[#4CAF4F] mt-6 flex gap-2 items-center px-[30%]">
                        <h4>Readmore</h4>
                        <FaLongArrowAltRight />

                    </div>
                </div>
                <div className="py-4 px-4 text-center  rounded-[8px] bg-[#F5F7FA]">
                    <h3 className="w-[250px] text-5">What are your safeguarding responsibilities and how can you manage them?</h3>
                    <div className="text-[#4CAF4F] mt-6 flex gap-2 items-center px-[30%]"><h4>Readmore</h4>
                     <FaLongArrowAltRight />
                    </div>
                </div>
                <div className="py-4 px-4 text-center  rounded-[8px] bg-[#F5F7FA]">
                    <h3 className="w-[230px] text-5">Revamping the Membership Model with Triathlon Australia</h3>
                    <div className="text-[#4CAF4F] mt-6 flex gap-2 items-center px-[25%]">
                        <h4>Readmore</h4>
                         <FaLongArrowAltRight />
                    </div>
                </div>

            </div>
        </Container>




    </div>
  )
}
