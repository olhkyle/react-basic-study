

export default function Result({company, team, name, phoneNumber, email}){
    return (
        <div style={{border: '1px solid black', marginTop: '20px', padding: '20px'}}>
            <h1>{company}</h1>
            <span>{team}</span>
            <strong>: {name}</strong>
            <p>
                <span>{phoneNumber}</span>
                <br/>
                <span>{email}</span>
            </p>
        </div>
    )
}