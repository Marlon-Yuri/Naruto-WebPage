import styled from "styled-components";

export const Container= styled.section`
margin-top:32%;
width:100%;
height:90vh;
position:relative;
background-color:#EE8262;
display:flex;
justify-content:space-between;

border:solid black;
`
export const ImgRasengan= styled.img`
width:29vw;
position:absolute;
left:12.5%;
top:5%;
`
export const CardRasengan= styled.div`
width:37vw;
height:70vh;
background: url(${props => props.back}) 100%;
background-size:cover;
background-repeat:no-repeat;
border-radius:10%;
background-position: 26% 30%;
 

`

export const ImgChidori= styled.img`
width:27vw;
position:absolute;
top:-24%;
left:47%;
`
export const CardChidori= styled.div`
width:37vw;
height:70vh;
background: url(${props => props.back}) 100%;
background-size:cover;
background-repeat:no-repeat;
border-radius:10%;
background-position: 26% 30%;
`

export const Text= styled.div`
width:27vw;
font-size:3vw;
display:flex;
justify-content:center;
color:#4A708B;
font-family: 'Raleway', sans-serif;

`