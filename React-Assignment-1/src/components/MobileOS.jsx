function MobileOS(Props) {
    return (
        <div className="mobile-os-container">
            <h1 className="heading">{Props.heading}</h1>
            <ul className="list">
                {Props.lists.map((el, index) => {
                    return <li className="list-item" key={index}>{el}</li>;
                })}
            </ul>
        </div>
    )
}

export default MobileOS