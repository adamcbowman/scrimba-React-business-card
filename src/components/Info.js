import Buttons from './Buttons'
import selfie from '../images/IMG_0406.jpg'


export default function Info() {
    return(
        <section id="info">
            <img id="selfie" src={selfie} alt="selfie" />
            <h1>Adam Bowman</h1>
            <h4>Developer</h4>
            <h6><a href="https://adambowman.tech" target="_blank" rel="noreferrer">adambowman.tech</a></h6>
            <Buttons />
        </section>

    )
}