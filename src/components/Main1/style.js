import styled from 'styled-components'

export const Container = styled.div`
width:100%;
height:82vh;
background: url(${props => props.back});
background-size:cover;
opacity:60%;
position:relative;
`
export const Boxname = styled.div`
width:50vw;
position:absolute;
left:6%;
top:19%;
display:flex;
justify-content:center;
`
export const Nameimg = styled.img`
width:51vw;
&:hover
{
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
     transform: scale(1.1);
    cursor:pointer;
}
`
export const Button =styled.div`
background: url(${props => props.back}) 100%;
background-size:cover;
width:11vw;
height:10vh;
position:absolute;
top:75%;
left:40%;
&:hover{
    cursor:pointer;
    width:10.5vw;
    height:10vh;
}

`
