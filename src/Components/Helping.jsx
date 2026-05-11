import { Container } from "./Container"
import a from "../assets/a.png"


export const Helping = () => {
  return (
    <div>
        <Container>
            <div>
                <div>
                    <h2>Helping a local <span>business reinvent itself</span></h2>
                    <p>We reached here with our hard work and dedication</p>
                </div>
                <div>
                    <div>
                        <img src={a} alt="" />
                    </div>
                    <div>
                        <h2>2,245,341</h2>
                    </div>
                    <p>Members</p>
                </div>
            </div>
        </Container>
    </div>
  )
}
