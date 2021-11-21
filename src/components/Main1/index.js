import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'

export function Main1(){
    const data = useStaticQuery(graphql`
    query{
        alldata{
            main1S {
              namenaruto {
                url
              }
              button {
                url
              }           
              backmain1 {
                url
                }
              }    
        }
    }
    
    `)

    const {backmain1, namenaruto,button} = data.alldata.main1S[0]
    return(
      <div>
      <S.Container back ={backmain1.url}>  
     
      </S.Container>
    <S.Boxname>
        <S.Nameimg src={namenaruto.url} alt='logonome'/>
      </S.Boxname> 
      <S.Button back={button.url}></S.Button>
      </div>
      
    )
}