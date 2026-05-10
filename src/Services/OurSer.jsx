import { Container } from "../Components/Container"
import { Logo } from "../Components/Logo"
import { SecHead } from "../Components/SecHead"


export const OurSer = () => {
  return (
    <>  <Container className='mt-10'>
            <SecHead heading='Our Clients' para='We have been working with some Fortune 500+ clients'/>
            <Logo/>
            <SecHead className='mt-10 mb-8' heading='Manage your entire community in a single system' para='Who is Nextcent suitable for?'/>
        </Container>
    </>
  )
}
