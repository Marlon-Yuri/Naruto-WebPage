import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'

export function Maintwo(){
    const data = useStaticQuery(graphql`
    query{
        alldata{
            maintwos {
              kakashi {
                url
              }
              kurama {
                url
              }
              babykurama {
                url
              }
              team {
                url
              }
              naruto {
                url
              }
              sakura {
                url
              }
              sasuke {
                url
              }
                
              academypicture {
                url
              }

          }    
        }
    }
    
    `)

    const { academypicture,team, sakura,kurama,babykurama, naruto, kakashi, sasuke} = data.alldata.maintwos[0]
    return(
      <S.Container>
       <S.ImgBox back ={academypicture.url}></S.ImgBox>
       <S.CardBox>
         <S.BoxSakura>
           <S.ImgCard src={sakura.url} alt='' />
           <S.Sakuraname>SAKURA</S.Sakuraname>
         </S.BoxSakura>
       
       <S.BoxKakashi>
           <S.ImgCard src={kakashi.url} alt='' />
           <S.Kakashiname>KAKASHI</S.Kakashiname>
       </S.BoxKakashi>

       <S.BoxNaruto>
           <S.ImgCard src={naruto.url} alt='' />
           <S.Narutoname>NARUTO</S.Narutoname>
       </S.BoxNaruto>

       <S.BoxSasuke>
           <S.ImgCard src={sasuke.url} alt='' />
           <S.Sasukename>SASUKE</S.Sasukename>
       </S.BoxSasuke>
       <S.Team src={team.url} alt=''/>         
      </S.CardBox>
      <S.Kurama back ={kurama.url}></S.Kurama>
      <S.Line>
        <S.List>
          <S.Item>Nine Tails</S.Item>
          <S.Item>Demon</S.Item>
          <S.Item>Friend</S.Item>
          <S.Item>Kyuubi</S.Item>
        </S.List>
      </S.Line>
      <S.Babykurama back ={babykurama.url}></S.Babykurama>   
          
        

      </S.Container>
      
      
    )
}