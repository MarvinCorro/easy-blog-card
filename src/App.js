import React from "react";
import Card from "./blog-post/Card.js";
import img from "./img/test.jpg";


export function App() {

  const badges = []
  for (let i = 0; i < 2; i++) {
    badges.push({ 
      id: i,
      bold: false,
      color: 'primary',
      italic: false,
      size: 'small',
      text: 'Badge ' + i,
    })
  }
 
  return (
    <div style={{
        display: 'flex',
        justifyContent:'center', 
        width: '100%', 
        minHeight: '100%'
      }}>
      <Card 
        img={img}
        size={'medium'}
        badges={badges}
        title={'Top 5 Living Rooms Insperations'}
        description={'Curated vibrants colors for your living, make it pop & calm in the same time.'}
      />
    </div>
  )
}