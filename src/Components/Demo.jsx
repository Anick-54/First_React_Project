import { Button } from "./Button"
import { Container } from "./Container"



export const Demo = () => {
  return (
    <>
    <div className="bg-[#F5F7FA]">
        <Container className="text-center">
            <div>
                <div>
                    <h1 className="!text-black w-[887px] text-[64px] mx-auto">Pellentesque suscipit fringilla libero eu.</h1>
                </div>
            </div>
            <Button className='mt-8 mb-8'>Get a Demo</Button>
        </Container>

    </div>
    </>
  )
}
