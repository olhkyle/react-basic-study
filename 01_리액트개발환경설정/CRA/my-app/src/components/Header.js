import React from 'react'
import logo from '../logo.svg';

// 화살표 함수로 표현해도 상관없다.
const Header = (props) => {
    // props는 object
    return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Edit <code>src/App.js</code> and save to reload.
        hello world
        </p>
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        {props.title}
        </a>
    </header>
    )
}



export default Header;