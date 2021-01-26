import React from 'react';
import img from '../Imgs/PortfolioPicture.jpg'
const aboutMeComp = props => {



    return(
        <div className = "AboutMeComp">
            <div className = "PictureWrapper">
                <img src = {img} className = "Picture" alt="Bilde av meg">
                </img>
            </div>
           
            <div className = "AboutMeWrapper">
                <p>
                    Jeg heter Bence og er en 23 år gammel mann med en bachelorgrad i kognitiv psykologi, Hvor jeg skrev
                    om de kognitive mekanismene bak hvorfor man velger som man velger og hvorfor brukere
                    kan og blir manipulert til å ta visse produktvalg rettet mot den digitale verden.
                </p><p> 
                    I 2021 fullfører jeg min andre bachelorgrad i bruksorientert design med hovedfokus i 
                    utvikling. Jeg spisset meg mot utvikling fordi jeg har en brennende lidenskap for faget
                    med en god logisk sans og gode kommunikative evner som gjør at jeg kan holde god kontakt
                    med kunden og levere som avtalt.
                </p>
            </div>
            
        </div>
    )
}




export default aboutMeComp