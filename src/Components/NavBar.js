import React from 'react';
const navBar = props => {




    return(
        <div className = "NavBar">
            <div className = "Left">
                <p onClick = {props.homeHandler}>
                    HOME
                </p>
                <p  onClick = {props.aboutHandler}>
                    ABOUT
                </p>
                <a href = {`#${props.href}`}>
                    CONTACT
                </a>
            </div>
            <div  className = "Right">
                <p>
                {props.name}
                </p>
            </div>
        </div>
    )
}
export default navBar