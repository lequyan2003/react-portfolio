import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPython, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons"
import Loader from "react-loaders"

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <>        
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                            idx={15}
                        />
                    </h1>
                    <p>
                    I'm a self-motivated undergraduate with a fervent interest in computer science and AI, 
                    actively seeking internship opportunities in software engineering and machine learning 
                    roles to leverage my technical skills and drive innovative solutions.
                    </p>
                    <p>
                    With a solid foundation in these areas and hands-on experience in blockchain technology 
                    and NLP research, I'm driven to tackle complex challenges and drive innovation.
                    </p>
                    <p>
                    Outside of academics, I enjoy tutoring calculus and developing web applications, 
                    reflecting my passion for both learning and creating practical solutions.
                    </p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faPython} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About