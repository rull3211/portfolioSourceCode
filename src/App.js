import img0 from "./Imgs/cvBackground.jpg"
import img1 from "./Imgs/snek.PNG"
import img2 from "./Imgs/Budget.PNG"
import img3 from "./Imgs/Algoritmer.PNG"
import img4 from "./Imgs/Lege.PNG"
import img5 from "./Imgs/Labyrinth.PNG"
import img6 from "./Imgs/Matboksen.PNG"
import img7 from "./Imgs/Psql.PNG"
import img8 from "./Imgs/MineSweeper.PNG"

import './App.css';
import InfoComp from './Components/InfoComp';
import React ,{ Component } from "react";
import NavBar from "./Components/NavBar"
import ContactComp from './Components/ContactComp'
import AboutMeComp from "./Components/AboutMeComp"
class App extends Component{
    state = {
        page : "main",
    }
    
    aboutHandler = () =>{
        if(this.state.page === "main") this.setState({page: "about"})
    }
    homeHandler = () =>{
        if(this.state.page === "about") this.setState({page: "main"})
    }
    
    
    render(){

        let toRender = null;
        let mainPage = <div className = "Content1">
        <NavBar 
            href = "contactDiv" 
            name = "Bence Daniel Szøke"
            aboutHandler = {this.aboutHandler}
            homeHandler = {this.homeHandler}
            >
        </NavBar>
        <div className = "MainContent">
            <div className = "Row">
                <InfoComp
                    url = {img0}
                    info = "Har i det siste utviklet en CvGenerator som skal hjelpe jobbsøkere i å få en ideell 1-side cvLayout trykk er for hostet nettside og sourcekode"
                    href = "https://github.com/rull3211/CvGenerator"
                ></InfoComp>
                <InfoComp
                    url = {img1}
                    info = "Portet snake til Html med js backend trykk her for kode"
                    href = "https://github.com/rull3211/Referanse/tree/master/snekTml"
                ></InfoComp>
                <InfoComp
                    url = {img2}
                    info = "En liten budsjettapp jeg utviklet da jeg lærte meg Js trykk her for kode"
                    href = "https://github.com/rull3211/Referanse/tree/master/myBudgetApp"
                ></InfoComp> 
            </div>
            <div className = "Row">
                <InfoComp
                    url = {img3}
                    info = "Har studert algoritmer og datastrukturer som hjelper meg å sikre effektiv og rask kode"
                ></InfoComp>
                <InfoComp
                    url = {img4}
                    info = "Har utviklet et Mock Backend for et legesystem i java trykk her for kode"
                    href = "https://github.com/rull3211/Referanse/tree/master/LegesystemWIP"
                ></InfoComp>
                <InfoComp
                    url = {img5}
                    info = "Mitt første grafiske prosjekt var en labyrintGenerator som fant veien ut fra labyrintet ved hjelp av rekursjon trykk her for kode"
                    href = "https://github.com/rull3211/Referanse/tree/master/LabyrintGui"
                ></InfoComp>  </div>
            <div className = "Row"> 
                <InfoComp
                        url = {img6}
                        info = "Var hovedutvikler på skoleprosjekt i bruksorientert design, hvor arduinosystemet skulle hjelpe bruker med å redusere matsvinn trykk her for å ta en nærmere blikk på prosjekt og kode"
                        href = "https://www.uio.no/studier/emner/matnat/ifi/IN1060/v20/prosjekter-20/tyggepaden/index.html"
                ></InfoComp>
                <InfoComp
                    url = {img7}
                    info = "Erfaring fra skole med både utvilking og programmering med PostgreSQL"
                ></InfoComp>
                <InfoComp
                    url = {img8}
                    info = "Laget minesweeper i java med hjelp av JavaFX trykk her for kode"
                    href = "https://github.com/rull3211/Referanse/tree/master/MineSweeper"
                ></InfoComp> 
            </div>
        </div>
            <ContactComp>

        </ContactComp>
    </div>
        let aboutPage = <div className = "Content2">
        <NavBar 
            href = "contactDiv" 
            name = "Bence Daniel Szøke"
            aboutHandler = {this.aboutHandler}
            homeHandler = {this.homeHandler}
            >
        </NavBar>
        <div className = "MainContent">
        <AboutMeComp></AboutMeComp>
        </div>
            <ContactComp>

        </ContactComp>
    </div>
        if(this.state.page === "main"){
            toRender = mainPage
        }
        else if (this.state.page === "about"){
            toRender = aboutPage
        }
        return (
            <div>
                {toRender}
            </div>
           
        )
    }
}



export default App;
