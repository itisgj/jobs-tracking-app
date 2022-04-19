import { Link } from 'react-router-dom'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo/>
        </nav>
        <div className='container page'>
            <div className='info'>
                <h1>job <span>tracking</span> app</h1>
                <p>I'm baby pour-over vegan kitsch, 90's selvage activated charcoal ramps. Vaporware aesthetic small batch, hell of plaid chambray edison bulb unicorn chia 8-bit hoodie cliche deep v farm-to-table readymade.</p>
                <Link to='/register' className='btn btn-hero'>
                    Login/Register
                </Link>
            </div>
            <img src={main} alt='job hunt' className='img main-img'/>
        </div>
            
    </Wrapper>
  )
}


export default Landing
