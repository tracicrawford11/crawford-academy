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
                <img className='fix-credit' src='https://2.bp.blogspot.com/-Hl-QLMBVLoU/WIzXV8dLU7I/AAAAAAAAD04/gBQKUeit4G05NPncpsps8soaSPE4uKFCQCLcB/s1600/new-self.jpg' alt='Fix'/>
            </section>

            <section className='expectations'>
                <h1 className='exp'>Learning for personal development</h1>
                <p className='parexp'>We are an innovative team of dedicated, passionate, and remarkable individuals determined to help you get to know your true self in order to become the best version of yourself.
                </p>
            </section>
            
            <section className='images'>
                <img className='benefits' src='https://image.slidesharecdn.com/importanceofselfdevelopment-151119130113-lva1-app6892/95/importance-of-self-development-1-638.jpg?cb=1447938167' alt='benefits' />
                <img className='advantage' src='https://inspirationboost.com/wp-content/uploads/2013/08/7-Steps-to-Happiness.jpg' alt='advantage' />
            </section>

            <section className='education'>
                <h1 className='edu'>Suggested Reading</h1>
                <article className='education-boxes'>
                    <a className='edbox1'>
                       <img className='myth1' src='https://images-na.ssl-images-amazon.com/images/I/51QdtAXQtDL.jpg' alt='errors'/> 
                    </a>
                    <a className='edbox2'>
                        <img className='fact1' src='https://www.selfthrive.com/wp-content/uploads/2017/01/FeeltheFear.jpg' alt='errors'/> 
                    </a>
                    <a className='edbox3'>
                        <img className='scores' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTr91N0HmNINlpLC2eec8QxrQFyxe6ujcBGdV-Kc7LVgtYLbknw&usqp=CAU' alt='Credit' />
                    </a>
                </article>
            </section>

            <section className='education2'>
                <h1 className='edu2'>Helpful Quotes</h1>
                <article className='education-boxes2'>
                    <a className='edbox1-2'>
                        <img className='myth2' src='https://i.pinimg.com/originals/36/bc/02/36bc02342b3f9b45db389430fa94e787.jpg' alt='scores' />
                    </a> 
                    <a className='edbox2-2'>
                       <img className='fact2' src='https://www.bigstridz.com/wp-content/uploads/2018/12/bd408e267890e4c3c4884c1a9a83f771.jpeg ' alt='scores' />
                    </a>
                    <a className='edbox3-2'>
                        <img className='summary2' src='https://cdn.doyou.com/wp/2015/09/15-Quotes-to-Inspire-Self-Love-14.jpg' alt='Credit' />
                    </a>
                </article>
            </section>

            <section className='process'>
                <h1 className='proc'>Hold Yourself Accountable</h1>
                <img className='steps' src='https://miro.medium.com/max/520/1*6OAEqtqML0LK-Q0TP73_8w.jpeg' alt='steps' />
            </section>
        </div>
    )}
}
export default Home