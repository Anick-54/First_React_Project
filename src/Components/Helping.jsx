import { Container } from "./Container"
import a1 from "../assets/a1.png"
import b1 from "../assets/b1.png"
import c1 from "../assets/c1.png"
import d1 from "../assets/d1.png"


export const Helping = () => {
  return (
    <div className="bg-[#F5F7FA] h-[288px]">
        <Container className="mt-12">
            <div className="flex gap-[204px]">
                <div className="pt-[84px]">
                    <div>
                        <h2 className="w-[420px] ">Helping a local <span className="text-[#4CAF4F]">business reinvent itself</span></h2>
                        <p>We reached here with our hard work and dedication</p>
                    </div>
                </div>
                <div className="pt-16">
                    <div className="flex gap-[120px] ">
                        <div className="flex gap-3.5">
                            <div>
                                <img src={a1} alt="" className="mt-2"/>
                            </div>
                            <div>
                                <h2>2,245,341</h2>
                                <p>Members</p>
                            </div>
                        </div>
                        <div className="flex gap-3.5">
                            <div>
                                <img src={b1} alt="" className="mt-2" />
                            </div>
                            <div>
                                <h2>46,328</h2>
                                <p>Clubs</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[150px] mt-10">
                        <div className="flex gap-3.5">
                            <div>
                                <img src={c1} alt=""className="mt-2" />
                            </div>
                            <div>
                                <h2>828,867</h2>
                                <p>Event Bookings</p>
                            </div>
                        </div>
                        <div className="flex gap-3.5">
                            <div>
                                <img src={d1} alt=""className="mt-2" />
                            </div>
                            <div>
                                <h2>1,926,436</h2>
                                <p>Payments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}
