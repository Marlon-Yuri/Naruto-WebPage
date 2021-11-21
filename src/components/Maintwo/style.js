import styled from 'styled-components'

export const Container = styled.section`
width:100%;
height:130vh;

`

export const ImgBox = styled.div`
width:100%;
height:17vh;
border: solid black;
display:flex;
background: url(${props => props.back}) 50%;
background-position: 0% 77%;
margin-top: 10px;
background-size:cover;

`

export const CardBox = styled.section`
border: solid black;
margin-top:0.5%;
width:100%;
height:70vh;
background-color:#8B2323;
display:flex;
align-items:center;
position:relative;
`
export const BoxSakura=styled.div`
width:29vw;
height:66vh;
border: solid blue;
position:absolute;
filter: blur(3px);
display:flex;
opacity:60%;
justify-content:center;
border: thick  groove  indianred;
border-radius:20%;
background-color:#DB7093;
&:hover{
    cursor:pointer;
    z-index:999;
    -webkit-transform: scale(1.0);
     transform: scale(1.1);
     opacity:100%;
     transform: rotate(360deg);
     filter:none;
}

`
export const Sakuraname = styled.h1`
transform: rotate(270deg);
position:absolute;
right:80%;
top:60%;
font-weight:bolder;
font-size:2vw;
font-family: monospace
`
export const ImgCard=styled.img`
width:20vw;
`
export const BoxKakashi=styled.div`
width:29vw;
height:66vh;
border: solid blue;
position:absolute;
filter: blur(3px);
display:flex;
opacity:69%;
left:14%;
justify-content:center;
border: thick  groove  indianred;
border-radius:20%;
background-color:#4682B4;
&:hover{
    cursor:pointer;
    z-index:999;
    -webkit-transform: scale(1.0);
     transform: scale(1.1);
     opacity:100%;
     transform: rotate(360deg);
     filter:none;
}
`
export const Kakashiname = styled.h1`
transform: rotate(270deg);
position:absolute;
right:80%;
top:60%;
font-weight:bolder;
font-size:2vw;
font-family: monospace
`
export const BoxNaruto=styled.div`
width:29vw;
height:66vh;
filter: blur(3px);
border: solid blue;
position:absolute;
left:27%;
display:flex;
justify-content:center;
border: thick  groove  indianred;
border-radius:20%;
opacity:77%;
background-color:#B8860B;
&:hover{
    cursor:pointer;
    z-index:999;
    -webkit-transform: scale(1.0);
     transform: scale(1.1);
     opacity:100%;
     transform: rotate(360deg);
     filter:none;
}
`
export const Narutoname = styled.h1`
transform: rotate(270deg);
position:absolute;
right:80%;
top:60%;
font-weight:bolder;
font-size:2vw;
font-family: monospace
`
export const BoxSasuke=styled.div`
width:29vw;
height:66vh;
border: solid blue;
position:absolute;
left:40%;
filter: blur(1px) contrast(2);
opacity:77%;
display:flex;
justify-content:center;
border: thick  groove  indianred;
border-radius:20%;
background-color:#1C1C1C;

&:hover{
    cursor:pointer;
    z-index:999;
     opacity:100%;
     transform: rotate(360deg);
     filter:none;


}
`
export const Sasukename = styled.h1`
transform: rotate(270deg);
position:absolute;
right:80%;
top:60%;
font-weight:bolder;
font-size:2vw;
font-family: monospace
`
export const Team =styled.img`
width:31.5vw;
position:absolute;
left:68.1%;
top:12%;
`
export const Line =styled.div`
width:100%;
height:7vh;
border:solid black;
display:flex;
justify-content:center;
align-items:center;

`
export const List =styled.ul`
display:flex;
width:60vw;
list-style:none;
font-weight:bolder;
font-size:1.9vw;
justify-content:space-evenly;
`
export const Kurama =styled.div`
width:100%;
background: url(${props => props.back}) 100%;
background-size:cover;
height:53vh;
background-repeat:no-repeat;
`
export const Babykurama =styled.div`
width:100%;
height:53vh;
background: url(${props => props.back});
background-size:cover;
 
`
export const Item =styled.li`
display:flex;
justify-content:center;
width:15vw;
font-family: 'Shippori Antique B1', sans-serif;
&:hover{
    background-color:black;
    color:white;
    border:solid black;
    box-shadow: inset  -14vw 0  #D74430, 2px 0 2px #000, 0 4px 4px #707070;
    transition: box-shadow 1s ease;
    box-shadow: inset  -15vw 0  #D74430;
    transition: box-shadow 1s ease-in-out;
    -webkit-transition: box-shadow 1s ease-in-out;
    -moz-transition: box-shadow 1s ease-in-out ;
    -o-transition: box-shadow 1s ease-in-out;
    cursor:pointer;

}
`