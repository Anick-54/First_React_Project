import { Container } from "./Container"
import UnIm from "../assets/Frame 35.png"
import { Button } from "./Button"

export const UnSec = () => {
  return (
    <>
    <Container>
        <div className="flex justify-between items-center">
            <div>
                <img src={UnIm} alt="" />
            </div>
            <div className="w-[661px]">
                <h2 className="w-[601px] text-4xl">The unseen of spending three years at Pixelgrade</h2>
                <p className="text-[14px] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <Button className="mt-8 text-[16px]">Learn Moore</Button>
            </div>

        </div>
        
    </Container>
    
    </>

    
  )
}
