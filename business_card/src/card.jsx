import "./index.css"
export function Card(){
    return (
        <div id="front">
            <div>
                <img src="profile.png" id="profile" alt="hello"></img>
                 </div>
                 <div id="content">
                <h4 id="name"><b><u>Name:</u></b>Harsimran Kaur</h4>
                <p><b><u>Role:</u></b>Web Developer / CSE Student </p>
                <p><b><u>College: </u></b>PES University  </p>
                <p>Turning coffee into code ☕💻</p>
                <p><b><u>Tech stack:</u></b></p>
                <div id="tech">
                    
                    <i class="fa-brands fa-html5"></i>
                    <i class="devicon-css3-plain"></i>
                    <i class="devicon-javascript-plain"></i>
                    <i class="fa-brands fa-react"></i>
                </div>
                <p><b><u>Contact:</u></b></p>
                <div id="contact">
                 <a href="mailto:harsimran.kaur2271@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                <a href="https://github.com/harsimran-kaur01"><i className="fab fa-github"></i></a>
                <a href="http://www.linkedin.com/in/harsimran-kaur-29b908328"><i className="fa-brands fa-square-linkedin"></i></a>
                </div>
        </div>
        </div>
    )
}
export default Card