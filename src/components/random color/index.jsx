import React, { useState,useEffect } from 'react'

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000');
    function randomColorUtility(length){
        return Math.floor(Math.random()*length);
    }
    function handleCreateRandomHexColor(){
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = '#';
        for(let i=0;i<6;i++){
            hexColor += hex[randomColorUtility(hex.length)];
        }
        
        setColor(hexColor);
    }
    function handleCreateRandomRgbColor(){
        let v1 = randomColorUtility(256);
        let v2 = randomColorUtility(256);
        let v3 = randomColorUtility(256);
        let v4 = randomColorUtility(1);


        let rgbColor = `rgba(${v1},${v2},${v3},${v4})`;
        setColor(rgbColor);
    }
    useEffect(() => {
      if(typeOfColor === 'rgb') handleCreateRandomRgbColor();
      else handleCreateRandomHexColor();
    }, [typeOfColor]);
    
  return (
    <div style={{
        width:"100vw",
        height:"100vh",
        background:color,
        padding:'5px 5px',
    }}>
        <button onClick={()=>setTypeOfColor('hex')}> Create HEX Color</button>
        <button onClick={()=>setTypeOfColor('rgb')}> Create RGB Color</button>
      <button onClick={typeOfColor === 'hex' ? ()=>handleCreateRandomHexColor():()=>handleCreateRandomRgbColor()}>Generate Random Color</button>
      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'#fff',
        fontSize:'30px',
        flexDirection:'column',
        gap:'20px'
      }}>
        <h3>{typeOfColor==='rgb'?"RGB Color":"HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}

export default RandomColor
