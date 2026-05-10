import { Container } from "./Container"
import lg1 from '../assets/1.png'
import lg2 from '../assets/2.png'
import lg3 from '../assets/3.png'
import lg4 from '../assets/4.png'
import lg5 from '../assets/5.png'
import lg6 from '../assets/6.png'
import lg7 from '../assets/7.png'
import lg8 from '../assets/8.png'
import lg9 from '../assets/9.png'
import lg10 from '../assets/10.png'


export const Logo = () => {
  return (
    <div>
        <Container>
            <div className="flex justify-between mt-10">
                <div>
                    <a href="#">
                        <img src={lg1} alt="" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src={lg2} alt="" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src={lg3} alt="" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src={lg4} alt="" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src={lg5} alt="" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src={lg6} alt="" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src={lg7} alt="" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src={lg8} alt="" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src={lg9} alt="" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src={lg10} alt="" />
                    </a>
                </div>
            </div>
        </Container>
    </div>
  )
}
