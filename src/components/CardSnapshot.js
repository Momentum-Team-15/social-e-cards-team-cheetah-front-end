import { Link } from 'react-router'

export const CardSnapshot = ({ cardId, userId, setSelected }) => {
    return (
        // layout of card snapshot below starts with the frame that will be raised off the screen with drop shadow then the card border will be next, which attributes must have a definied null value?
        <div className="card-frame">
            <div className="card-snapshot">
                <div className="card-snapshot-front">
                    <div className="borderstyle">
                        <h1 className="outerMessage-style">{outermsg}</h1>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}