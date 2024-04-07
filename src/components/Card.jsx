const Card = ({charName, charImage}) => {
    return (
        <div>
            <h2>{charName}</h2>
            <img src={charImage}/>
        </div>
    )
};

export default Card