import React from 'react'
// import Circle from './components/circle/Circle'
import Hexagon, {Traingle} from './components/Hexagon'
import photographer from "./components/circle/photographer.jpg"
import trophy from "./components/circle/trophy.webp"
import twopeople from "./components/circle/twopeople.jpg"
import speech from "./components/circle/speech.jpg"
import three from "./components/circle/three.jpg"

function App() {
  return (
    <div>
      <Hexagon heading="2,000+" para="GRADUATES EVERY YEAR" style={{ height:"8vw", width:"7vw", right:"1vw", top:"6vw",backgroundColor:"rgb(88, 166, 107)" }}/>
      <Hexagon style={{width:"6vw", height:"7vw", right:"14.5vw", top:"4.7vw", backgroundImage:`url(${trophy})`}}/>
      <Hexagon style={{width:"6vw", height:"7vw", right:"22.5vw", top:"4.7vw", backgroundImage:`url(${trophy})`}}/>
      <Hexagon style={{width:"2.5vw", height:"3vw", right:"10vw", top:"5.5vw", backgroundColor:"rgb(84, 190, 218)"}}/>
      <Hexagon style={{width:"2.3vw", height:"2.8vw", right:"9.8vw", top:"9.8vw", backgroundColor :"rgb(228, 166, 57)", zIndex:"-1"}}/>
      <Hexagon heading="70,000+" para="SUCCESS STORIES" style={{width:"7vw", height:"8vw", right:"9.5vw", top:"11.5vw", backgroundColor :"rgb(124, 84, 137)"}}/>
      <Hexagon heading="9 TIMES" para="WINNER OF BRAND OF THE YEAR 2011-19" style={{width:"5.2vw", height:"6.2vw", right:"18.9vw", top:"12vw", backgroundColor:"rgb(45, 97, 58)", fontSize:"0.7vw"}}/>
      <Hexagon heading="100,000+" para="STUDENTS FAMILY" style={{width:"4.5vw", height:"5.5vw", right:"27vw", top:"12vw", backgroundColor:"rgb(88, 166, 107)",fontSize:"0.7vw"}}/>
      <Hexagon style={{width:"2.5vw", height:"3vw", right:"4vw", top:"19vw", backgroundColor:"rgb(88, 79, 132)"}}/>
      <Hexagon style={{width:"2.5vw", height:"3vw", right:"7vw", top:"15vw", backgroundColor:"rgb(185, 87, 76)",zIndex:"-1"}}/>
      <Hexagon style={{width:"1.5vw", height:"2vw", right:"31vw", top:"11vw", backgroundColor:"rgb(84, 190, 218)",zIndex:"-1"}}/>
      <Hexagon style={{width:"2.5vw", height:"3vw", right:"20vw", top:"19vw", backgroundColor:"rgb(84, 190, 218)",zIndex:"-1"}}/>
      <Hexagon heading="WHO'S WHO AWARD" para="WINNER OF" style={{width:"5vw", height:"6vw", right:"23.3vw", top:"18vw",backgroundColor:"rgb(185, 87, 76)",fontSize:"0.5vw",flexDirection:"column-reverse"}}/>
      <Hexagon heading="BRAND SCIENTIST AWARD" para="WINNER OF" style={{width:"4.5vw", height:"5.7vw", right:"14.8vw", top:"18.8vw",backgroundColor:"rgb(114, 70, 33)",fontSize:"0.5vw",zIndex:"-1",flexDirection:"column-reverse"}}/>
      <Hexagon style={{width:"6.5vw", height:"7.5vw", right:"31vw", top:"17.4vw", backgroundImage:`url(${three})`}}/>
      <Hexagon style={{width:"6vw", height:"7.5vw", right:"18.7vw", top:"24vw", backgroundImage:`url(${speech})`}}/>
      <Hexagon heading="5,000+" para="FREELANCER & ENTERPRENUER" style={{width:"5.7vw", height:"7vw", right:"27.2vw", top:"25vw",backgroundColor:"rgb(228, 166, 57)",fontSize:"0.9vw"}}/>
      <Hexagon heading="PARIS AWARD" para="INTERNATIONAL STAR FOR LEADER IN QUALITY" style={{width:"10vw", height:"12vw", right:"36.5vw", top:"24vw",backgroundColor:"rgb(114, 70, 33)",fontSize:"1vw"}}/>
      <Hexagon style={{width:"2.7vw", height:"4vw", right:"33.3vw", top:"25vw", backgroundColor:"rgb(185, 87, 76)",zIndex:"-1"}}/>
      <Hexagon style={{width:"10vw", height:"12vw", right:"30.1vw", top:"34.2vw",backgroundImage:`url(${twopeople})`}}/>
      <Hexagon heading="WINNER OF" para="BRAND CSR AWARD" style={{width:"5vw", height:"6vw", right:"23.3vw", top:"31.5vw", backgroundColor:"rgb(185, 87, 76)",fontSize:"0.5vw"}}/>
      <Hexagon style={{width:"2vw", height:"3vw", right:"31vw", top:"32vw", backgroundColor:"rgb(185, 87, 76)",zIndex:"-1"}}/>
      <Hexagon style={{width:"3vw", height:"4.3vw", right:"28.2vw", top:"38.4vw", backgroundColor:"rgb(98, 135, 29)",zIndex:"-1"}}/>
      <Hexagon heading="40+" para="CENTERS IN 21 CITIES OF PAKISTAN" style={{width:"6.5vw", height:"7.7vw", right:"44vw", top:"35.3vw", backgroundColor:"rgb(14, 80, 134)",fontSize:"1vw"}}/>
      <Hexagon style={{width:"9vw", height:"10vw", right:"53vw", top:"34vw", backgroundImage:`url(${photographer})`}}/>
      <Hexagon style={{width:"9vw", height:"10vw", right:"46.9vw", top:"42.6vw", backgroundImage:`url(${trophy})`,zIndex:"2"}}/>
      <Hexagon para="SINDH TECHNICAL EDUCATION & VOCATIONAL TRAINING AUTHORITY" style={{width:"6vw", height:"7vw", right:"64.3vw", top:"35.5vw", backgroundColor:"rgb(148, 44, 55)",fontSize:"0.7vw"}}/>
      <Hexagon heading="9,000+" para="PROJECTS MADE FOR INDUSTRY" style={{width:"7vw", height:"8vw", right:"57.5vw", top:"44vw", backgroundColor:"rgb(20, 90, 26)",fontSize:"0.9vw",zIndex:"2"}}/>
      <Hexagon para="SINDH BOARD OF TECHNICAL EDUCATION" style={{width:"4.5vw", height:"5vw", right:"41.3vw", top:"43.3vw", backgroundColor:"rgb(22, 123, 161)",fontSize:"0.7vw"}}/>
      <Hexagon heading="4,500+" para="AMBASSADORS TRAINED MORE THAN 21,000 INDIVIDUALS" style={{width:"8vw", height:"9.5vw", right:"33.5vw", top:"46.8vw", backgroundColor:"rgb(22, 66, 33)",fontSize:"0.9vw"}}/>
      <Hexagon style={{width:"0.5vw", height:"1vw", right:"38.5vw", top:"45.5vw", backgroundColor:"rgb(228, 166, 57)",zIndex:"-1"}}/>
      <Hexagon style={{width:"3.5vw", height:"4vw", right:"42.5vw", top:"49.5vw", backgroundColor:"rgb(168, 56, 29)",zIndex:"-1"}}/>
      <Hexagon style={{width:"3vw", height:"4vw", right:"41.5vw", top:"55vw", backgroundColor:"rgb(66, 100, 16)",zIndex:"-1"}}/>
      <Hexagon style={{width:"5vw", height:"6vw", right:"50vw", top:"31vw", backgroundColor :"rgb(228, 166, 57)", zIndex:"-1"}}/>
      <Hexagon style={{width:"4vw", height:"5vw", right:"62vw", top:"30vw", backgroundColor :"rgb(60, 54, 102)", zIndex:"-1"}}/>
      <Hexagon style={{width:"2vw", height:"3vw", right:"65.5vw", top:"48vw", backgroundColor :"rgb(22, 123, 161)", zIndex:"-1"}}/>



      {/* <Circle heading="2,000+" para="GRADUATES EVERY YEAR" style={{height:"6vw",width:"6vw", right:"30%", top:"80vw", backgroundColor :"", backgroundImage:`url()`}}/> */}
    </div>
  )
}

export default App