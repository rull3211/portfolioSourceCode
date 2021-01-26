import React from 'react';
const navBar = props => {




    return(
        <li className = "NavBar">
            <div className = "NavEl">
                <div className = "NavElWrapper">
                    <p onClick = {props.homeHandler} className = "Home">
                        HOME
                    </p>
                </div>
                <div className = "NavElWrapper">
                    <p  onClick = {props.aboutHandler} className = "AboutMe">
                       ABOUT
                    </p>
                </div>
                <div className = "NavElWrapper">
                    <a className = "Contact" href = {`#${props.href}`}>
                        CONTACT
                    </a>
                </div>
            </div>
            <div className = "NameEl">
                <div className = "NameWrapper">
                    <p className = "Name">
                        {props.name}
                    </p>
                </div>
            </div>
        </li>
    )
}
export default navBar