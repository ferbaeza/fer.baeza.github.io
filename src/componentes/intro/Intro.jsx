import "./intro.css";
import Me from "../../img/yo.white.jpg";

const Intro = ()=>{
    return(
        <div className="main">
            <div className="left">
                <div className="intro">
                    <div className="descripcion">
                        <div className="titulo">
                            <h2 className="name">
                                Hi There, I'm
                            </h2>
                            <h1 className="name">
                                Fernando Baeza 
                            </h1>
                        </div>
                        <div className="intereses">
                            <div className="intereses-capa">
                                <div className="capa-item">Php</div>
                                <div className="capa-item">Laravel</div>
                                <div className="capa-item">Node</div>
                                <div className="capa-item">Javascript</div>
                                <div className="capa-item">Typescript</div>
                            </div>


                        </div>
                        <div className="descripcion-trabajo">
                            <span className="trabajo">
                                <p>
                                    I'm a Software Engineer 🚀 from Spain 🇪🇸, currently working 👨🏻‍💻 at Zataca Systems.
                                </p>
                                <p>
                                    I'm a passionate learner who loves the code ☕︎. 
                                    You'll always find me learning something new.
                                </p>
                            </span>
                            <span className="aficiones">
                                <p>
                                    Beside's programming, I love sports 🎾|🎽|🚴|🏃, 
                                    watching Netflix 📺 and delicious food 🌯 🍱.
                                </p>
                            </span>

                        </div>
                        <div className="botones">
                            <button className="boton">Contact Me</button>
                            {/* <button className="boton">Download CV</button> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="i-imagen">
                    <div className="imagen">
                        <img src={Me} alt="foto-perfil" className="foto-perfil"/>
                    </div>
                    <div className="f">

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Intro;