import styled from 'styled-components'


export const Header = styled.section`
width:100%;
height:13vh;
display: flex;
position:relative;
justify-content: space-between;
background-color:black;
`

export const List = styled.ul`
width:50vw;
display:flex;
justify-content:space-evenly;
align-items:center;
`
export const Logo = styled.img`
margin-left:4%;
margin-top:1%;
width:4.5vw;
height:12.5vh;
`


export const ListItem = styled.div`
list-style:none;
font-family: 'Anton', sans-serif;
font-size:1.2vw;
color:#FFF5EE;
&:hover{
    cursor:pointer;
    color:#FF8C00;
    ;
}
`
