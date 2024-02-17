import Loader from "react-loaders";
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useRef, useState } from "react"; 
import emailjs from "@emailjs/browser"
import { MapContainer, Marker, Popup } from "react-leaflet";
import { TileLayer } from "react-leaflet";

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timeout)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm (
                "service_ka6jfms",
                "template_ucth46r",
                refForm.current,
                "JXADKwN69xcsV8qZO"
            )
            .then(
                () => {
                    alert("Message successfully sent!")
                    window.location.reload(false)
                },
                () => {
                    alert("Failed to send the message, please try again")
                }
            )
    }
    
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in internship opportunities - especially ambitious or
                        large projects. However, if you have other request or question,
                        don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form 
                            ref={refForm}
                            onSubmit={sendEmail}
                        >
                            <ul>
                                <li className="half">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name" 
                                        required
                                    />
                                </li>
                                <li className="half">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email" 
                                        required
                                    />
                                </li>
                                <li>
                                    <input 
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    >                                    
                                    </textarea>
                                </li>
                                <li>
                                    <input 
                                        type="submit"
                                        className="flat-button"
                                        value="SEND"
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Abel Le
                    <br />
                    United States
                    <br />
                    13434 S Village Cir
                    <br />
                    Tampa, FL 33617 <br />
                    <span>anquyle@usf.edu</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[28.067903, -82.400089]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[28.067903, -82.400089]}>
                            <Popup>Abel lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman " />
        </>
    )
}

export default Contact;