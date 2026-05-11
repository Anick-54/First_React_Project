import logo from '../assets/Logo.png'
import { Button } from './Button'
import { Container } from './Container'
export const NavBar = () => {
  return (
    <>
    <Container>
    <nav className='mt-10 bg-[#F5F7FA]'>
        <div className='flex justify-between items-center'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <ul className='flex gap-10 '>
                    <li className='hover:text-green-700 cursor-pointer'>Home</li>
                    <li className='hover:text-green-700 cursor-pointer'>Service</li>
                    <li className='hover:text-green-700 cursor-pointer'>Feature</li>
                    <li className='hover:text-green-700 cursor-pointer'>Product</li>
                    <li className='hover:text-green-700 cursor-pointer'>Testimonial</li>
                    <li className='hover:text-green-700 cursor-pointer'>FAQ</li>
                </ul>
            </div>
            <div className='flex gap-2.5'>
                <Button className="bg-white">Login</Button>
                <Button>Sing Up</Button>
            </div>
            
        </div>
    </nav>
    </Container>
    </>
  )
}
