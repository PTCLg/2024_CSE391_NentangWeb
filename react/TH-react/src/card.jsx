import './css/card.css'
import profile from './assets/react.svg'

function Card() {
    return (
        <section>
            <div className='card'>
                <div>
                    <img src={profile} alt="placeholder 150" />
                    <h2>React</h2>
                    <p>React is the library for web and native user interfaces</p>
                </div>
            </div>
        </section>
    );
}

export default Card