import "../styles/Tile.css";

const Tile = ({value, tileTestId, onClick}) =>{
    return(
        <button data-testid={tileTestId} className="tile" onClick={onClick}>
            {value}
        </button>
    )
}

export default Tile;