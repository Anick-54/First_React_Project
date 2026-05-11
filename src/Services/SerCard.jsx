import { Card } from "../Components/Card"
import { Container } from "../Components/Container"
import icon from '../assets/Icon (3).png'
import icon2 from '../assets/Icon.png'
import icon3 from '../assets/Icon (1).png'





export const SerCard = () => {
  return (
    <div>
        <>
        <Container>
            
                <div className="flex justify-between">
                  <Card ImgSrc={icon} heading="Membership Organisations" para="Our membership management software provides full automation of membership renewals and payments"/>
                  <Card ImgSrc={icon2} heading='National Associations' para='Our membership management software provides full automation of membership renewals and payments'/>
                  <Card ImgSrc={icon3} heading='Clubs And Groups' para='Our membership management software provides full automation of membership renewals and payments'/>
                </div>
                
                
            
        </Container>
        
        
        
        </>
    </div>
  )
}
