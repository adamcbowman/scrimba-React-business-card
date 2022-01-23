export default function Buttons() {
    return(
        <div className='buttons'>
            <a href="mailto:adamcbowman@gmail.com"><button type="button" id="emailBtn" class="button"><i class="fas fa-envelope"></i>Email</button></a>
            <a target="_blank" href="https://www.linkedin.com/in/adamcbowman1983/"><button className='button' id='linkedInBtn'><i class="fab fa-linkedin"></i>LinkedIn</button></a>
        </div>
    )
}