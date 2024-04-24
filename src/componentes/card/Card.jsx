import "./card.css"

const Card = ({ repository })=>{
    return(
        <div className="card">
            <div className="card-body">
                <div className="card-titulo">
                    <h1>{repository.name}</h1>
                </div>
                <div className="card-body">

                </div>
                <div className="card-text">
                    <p>{repository.descripcion}</p>
                </div>
                <div className="icons">
                    <div className="icon">
                        <img src={repository.iconOne} alt="icon" className="icon-source"/>
                    </div>
                    <div className="icon">
                        <img src={repository.iconTwo} alt="icon" className="icon-source"/>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="link">
                    <a href={repository.url} target="_blank" rel="noreferrer">
                        <button className="btn-primary">Go to ..</button>
                    </a>
                </div>

            </div>

        </div>

    )
}

export default Card;