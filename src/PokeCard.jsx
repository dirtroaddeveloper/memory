
const PokeCard = ({ poke, handleClick }) => {

    
    
    return (

        <div className="divBlock" onClick={() => handleClick(poke.name)}>{poke.name}</div>
    )

}

export default PokeCard;