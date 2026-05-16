import { Container } from "./Container"
import l from "../assets/L.png"
import { FaInstagramSquare } from "react-icons/fa";
import { FaRegFutbol } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";







export const Footer = () => {
  return (
    <>
    <div className="bg-[#263238]">
        <Container>
            <div className="flex gap-[300px] pt-16 pb-16">
                <div>
                    <img src={l} alt=""/>
                    <p className="mt-10 !text-[#F5F7FA] w-[255px]">&copy; Copyright © 2020 Nexcent ltd. All rights reserved</p>
                    <div className="mt-10 flex gap-10 w-8 h-8 text-white">
                        <div><FaInstagramSquare /></div>
                        <div><FaRegFutbol /></div>
                        <div><FaTwitter /></div>
                        <div><FaYoutube /></div>
                    </div>

                </div>
                <div className="flex gap-[120px]">
                    <div>
                        <h3 className="!text-white font-bold mb-4">Company</h3>
                        <p className="!text-white">About us</p>
                        <p className="!text-white">Blog</p>
                        <p className="!text-white">Contact us</p>
                        <p className="!text-white">Pricing</p>
                        <p className="!text-white">Testimonials</p>
                    </div>
                    <div>
                        <h3 className="!text-white font-bold mb-4">Support</h3>
                        <p className="!text-white">Support</p>
                        <p className="!text-white">Terms of service</p>
                        <p className="!text-white">Legal</p>
                        <p className="!text-white">Privacy policy</p>
                        <p className="!text-white">Status</p>
                    </div>
                    <div className="relative">
                        <h3 className="!text-white font-bold">Stay up to date</h3>
                        <input type="text" className="bg-gray-500 rounded-[8px] w-[255px] text-white h-10 px-5 mt-6" placeholder="Enter Your Email" />
                        <LuSend className="absolute top-15 right-[11px] text-white w-[18px] h-[18px]" />

                    </div>






                </div>
            </div>
        </Container>
    </div>
    </>
  )
}
