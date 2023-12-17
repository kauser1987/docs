import React, { useRef, useState } from 'react'
import Card from './Card'


function Foreground() {
    const ref = useRef(null)

    const data=[
      {
      desc: "Lorem ipsum dolor sit amet consectetur.",
      filesize: ".9mb",
      close: true,
      tag: {
        isopen: true,
        tagTitle: "Download Now",
        tagColor: "green"
      },
    },
      {
      desc: "Lorem ipsum dolor sit amet consectetur.",
      filesize: ".9mb",
      close: true,
      tag: {
        isopen: true,
        tagTitle: "Download Now",
        tagColor: "green"
      },
    },
      {
      desc: "Lorem ipsum dolor sit amet consectetur.",
      filesize: ".9mb",
      close: true,
      tag: {
        isopen: true,
        tagTitle: "Download Now",
        tagColor: "green"
      },
    },
      {
      desc: "Lorem ipsum dolor sit amet consectetur.",
      filesize: ".9mb",
      close: true,
      tag: {
        isopen: true,
        tagTitle: "Download Now",
        tagColor: "green"
      },
    },
      {
      desc: "Lorem ipsum dolor sit amet consectetur.",
      filesize: ".9mb",
      close: true,
      tag: {
        isopen: true,
        tagTitle: "Download Now",
        tagColor: "green"
      },
    },
  ];
  return (
    
    <div ref={ref} className='flex flex-wrap gap-10 fixed px-3 py-2 mt-10 top-0 left-0  z-[3] w-full h-full'>

    {data.map((item, index)=>(
      <Card data={item} reference={ref} />
    
    
    ))}
    </div>
    
  );
}

export default Foreground;