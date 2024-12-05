import React, { useRef } from 'react'

const Scroll = () => {
    const ref = useRef();
    const data = [
        {
            label:'First Card',
            style:{
                height: '600px',
                width:'100%',
                background:'red'
            }
        },
        {
            label:'Second Card',
            style:{
                height: '600px',
                width:'100%',
                background:'green'
            }
        },
        {
            label:'Third Card',
            style:{
                height: '600px',
                width:'100%',
                background:'blue'
            }
        },
        {
            label:'Fourth Card',
            style:{
                height: '600px',
                width:'100%',
                background:'orange'
            }
        },
        {
            label:'Fifth Card',
            style:{
                height: '600px',
                width:'100%',
                background:'pink'
            }
        }
    ];
    const handleParticularSectionScroll = ()=>{
        let pos = ref.current.getBoundingClientRect().top;

        window.scrollTo({
            top: pos,
            behavior: "smooth",
        });
    }
  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleParticularSectionScroll}>Click</button>
      {
        data.map((dataItem,index)=> (
            <div ref={index===4?ref:null} style={dataItem.style}>
            <h3>{dataItem.label}</h3>

        </div>))
      }
    </div>
  )
}

export default Scroll
