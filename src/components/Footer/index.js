import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'
import './footer.css'

export function Footer(){
    const data = useStaticQuery(graphql`
    query{
        alldata{
            footers {
                backfooter {
                  url
                }
                handrasengan {
                  url
                }
                rasengan {
                  url
                }
              }
           }    
        }
    
    
    `)

    const {handrasengan,rasengan } = data.alldata.footers[0]
    return(     
        <div>
          
        </div>  
      
    )
}