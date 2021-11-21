import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'
import './carousel.css'
import Carousel from 'react-elastic-carousel'


export function Carossel(){
    const data = useStaticQuery(graphql`
    query{
        alldata{
            carousels {
                handrasengan {
                  url
                }
                chidori {
                  url
                }
                kakashichidori {
                  url
                }
                rasengan {
                  url
                }
              }
        }
    }
    
    `)

    const {handrasengan,rasengan,chidori,kakashichidori } = data.alldata.carousels[0]
    return(
      <S.Container>
          <Carousel className='slide'>
              <S.CardRasengan back={handrasengan.url}>
              <S.ImgRasengan className='rasengan' src={rasengan.url}/>
              </S.CardRasengan>

              <S.CardChidori back={kakashichidori.url}>
              <S.ImgChidori className='chidori' src={chidori.url}/>
              </S.CardChidori>
          </Carousel>
          <S.Text>
            <h1>CHAKRA</h1>
          </S.Text>
          
       
      </S.Container>
    )
}