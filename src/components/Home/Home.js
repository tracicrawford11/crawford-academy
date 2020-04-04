import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    
render () {
    return (
        <div>
            <nav className="topnav">
                <h2 className='crc'>Crawford Academy</h2>
                <ul className='navbar'>
                    <li><Link to='/home'><button>Home</button></Link></li>
                    <li><Link to='/courses'><button>Courses</button></Link></li>
                    <li><Link to='/aboutus'><button>About Us</button></Link></li>
                    <li><Link to='/signup'><button>SignUp!</button></Link></li>
                    <li><Link to='/login'><button>Student Login</button></Link></li>
                </ul>
            </nav>
            
            <section className='background-container'>
                <img className='fix-credit' src='https://blog.unfranchise.com/wp-content/uploads/2016/09/shutterstock_299202374.jpg' alt='Fix'/>
            </section>

            <section className='expectations'>
                <h1 className='exp'>Learning for person development</h1>
                <p className='parexp'>We are an innovative team of dedicated, passionate, and remarkable individuals determined to help you get to know your true self in order to become the best version of yourself.
                </p>
            </section>
            
            <section className='images'>
                <img className='benefits' src='https://image.slidesharecdn.com/importanceofselfdevelopment-151119130113-lva1-app6892/95/importance-of-self-development-1-638.jpg?cb=1447938167' alt='benefits' />
                <img className='advantage' src='https://thumbs.dreamstime.com/b/young-african-american-businesswomen-standing-front-mirror-looking-her-reflection-imagine-herself-successful-busi-124405365.jpg' alt='advantage' />
            </section>

            <section className='education'>
                <h1 className='edu'>Education</h1>
                <article className='education-boxes'>
                    <a className='edbox1'>
                       <img className='myth1' src='https://www.creditlawcenter.com/wp-content/uploads/2017/06/Top-5-Credit-Myths-1_Page_10.jpg' alt='errors'/> 
                    </a>
                    <a className='edbox2'>
                        <img className='fact1' src='https://www.creditlawcenter.com/wp-content/uploads/2017/06/Top-5-Credit-Myths-1_Page_11.jpg' alt='errors'/> 
                    </a>
                    <a className='edbox3'>
                        <img className='scores' src='https://bankonus.com/finance-expert/wp-content/uploads/2018/11/Good-Credit-Score.jpg' alt='Credit' />
                    </a>
                </article>
            </section>

            <section className='education2'>
                <h1 className='edu2'>Education</h1>
                <article className='education-boxes2'>
                    <a className='edbox1-2'>
                        <img className='myth2' src='https://www.creditlawcenter.com/wp-content/uploads/2017/06/Top-5-Credit-Myths-1_Page_08.jpg' alt='scores' />
                    </a> 
                    <a className='edbox2-2'>
                       <img className='fact2' src='https://www.creditlawcenter.com/wp-content/uploads/2017/06/Top-5-Credit-Myths-1_Page_09.jpg' alt='scores' />
                    </a>
                    <a className='edbox3-2'>
                        <img className='summary2' src='https://thecreditpros.com/wp-content/uploads/2018/06/how-credit-scores-are-built.gif' alt='Credit' />
                    </a>
                </article>
            </section>

            <section className='process'>
                <h1 className='proc'>The Process</h1>
                <img className='steps' src='https://www.jtaylorandassociates.com/images/process.png' alt='steps' />
            </section>
        </div>
    )}
}
export default Home