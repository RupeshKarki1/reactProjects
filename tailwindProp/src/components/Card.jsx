import './Card.css'

function Card(props) {
    return (
        <div className="p-1 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
            <p>Hello {props.userName}</p>
        </div>
    )
}

export default Card;