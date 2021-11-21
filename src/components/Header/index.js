import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'
import './header.css'

export function Header(){
    const data = useStaticQuery(graphql`
    query{
        alldata{
            headers {
                academylist
                kuramalist
                lifelist
                typelist
                logokonoha {
                  url
                }
              }    
        }
    }
    
    `)

    const {logokonoha, academylist,kuramalist, lifelist,typelist } = data.alldata.headers[0]
    return(
      <div>
        <S.Header>
            <S.Logo className='logo' src ={logokonoha.url} alt ='logo'/> 
           <S.List>
             <S.ListItem>
               <li>{academylist}</li>
             </S.ListItem>
             <S.ListItem>
               <li>{kuramalist}</li>
             </S.ListItem>
             <S.ListItem>
               <li>{lifelist}</li>
             </S.ListItem>
             <S.ListItem>
               <li>{typelist}</li>
             </S.ListItem>             
           </S.List>
        </S.Header>
       
      </div>
    )
}