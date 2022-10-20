import React, { useRef } from 'react';

// ref를 활용해서 비제어 컴포넌트 방식으로 form 다뤄보기 -> DOM 자체에서 폼을 다루기 (기존의 state를 활용한 form을 다룰 때는 제어 컴포넌트라고 불림)
function UnControlledForm(){
    const inputRef = useRef();
    // const handleChange = (e) => {
    //     console.log(e.target.value);
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(inputRef.current.value);
        inputRef.current.focus();
    }
    
    console.log(inputRef);
    console.log(inputRef.current);

    return (
        <form onSubmit={handleSubmit}>
            <label>닉네임: </label>
            <input type="text" name="nickname" ref={inputRef}/>
            <input type="submit" value="제출"/>
        </form>
    )
}

export default UnControlledForm;