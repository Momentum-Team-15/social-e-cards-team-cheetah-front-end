export const CardList = (props) => {
    return (
        <div className="card-display">
            {props.data.map((card) => (
                <div className="card-base">
                    <h6>Outer Message</h6>
                    {/* need to flesh out the styles */}
                </div>
            )
            )}
        </div>
    )
}