import "./proyectos.css";
import Card from "../card/Card";
import { proyectos } from "./proyectos.data";

const Proyectos =()=>{

    return(
        <div className="main-repositorios">
            <div className="titulo">
                <div className="texto">
                    <h1 className="repo-title">Create & learn</h1>
                    <p className="desc">
                        Personal Projects 🤓
                    </p>
                    <p>Sometimes I like to create some personal projects to learn new technologies and be updated and give my bit to the community.</p>                    
                </div>

            </div>

            <div className="container">
                {proyectos.map((item) => (
                    <Card key={item.id} repository={item} />
                ))}
            </div>

        </div>
    );
}

export default Proyectos;