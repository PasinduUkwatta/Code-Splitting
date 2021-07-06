import React from "react";
import logo from '../logo.svg'

const Page1 =({onRouteChange})=>{
    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <p>Page 1</p>
            </header>
            <button className="ui button" onClick={()=>onRouteChange("page2")}>Page 2 </button>
            <button className="ui button" onClick={()=>onRouteChange("page3")}>Page 3 </button>
        </div>
        )

}

export default Page1