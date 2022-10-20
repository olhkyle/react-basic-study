import React, { useState } from "react";

function SimpleForm(){
    // const [value, setValue] = useState('');
    // const [password, setPassword] = useState('');

    const [userInputs, setUserInputs] = useState({
        nickname: '',
        password: '',
    })
    const handleChange = (e) => {
        setUserInputs({...userInputs, [e.target.name] : e.target.value})
        // if(e.target.name === 'nickname'){
        //     setValue(e.target.value);
        // } else {
        //     setPassword(e.target.value);
        // }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // 서버에 요청 + 알파
        // alert(`nickname: ${value} | password: ${password}`)
        alert(`nickname: ${userInputs.nickname} | password: ${userInputs.password}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>NickName: </label>
            <input value={userInputs.nickname} type="text" name="nickname" onChange={handleChange} style={{marginBottom: '20px'}}/>
            <br/>
            <label>Password: </label>
            <input value={userInputs.password} name="password" type="text" onChange={handleChange}/>
            <button>제출</button>
        </form>
    )
}

export default SimpleForm;