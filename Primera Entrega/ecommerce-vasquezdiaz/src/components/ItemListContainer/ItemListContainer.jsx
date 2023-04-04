import { Container } from '@material-ui/core'
import React from 'react'
import ponzoo from '../../assets/images/foot.png';

function ItemListContainer({text}) {
  return (
    <div style={{padding: '5vh'}}>
        <div style={{backgroundColor: 'white', display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30vh',
            height: '70vh'}}>
            <div><img  
              src={ponzoo}
              width="130"
              height="130"
              alt="Bienvenidos!"
            /></div>
            {text}
        </div>
    </div>
  )
}

export default ItemListContainer