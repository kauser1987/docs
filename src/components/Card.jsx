import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { RiCloseLine } from "react-icons/ri";
import { motion } from "framer-motion"
function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} dragTransition={{bounceStiffness:600, bounceDamping:10}} className='relative p-5 w-40 h-[18vw] mt-10 bg-zinc-900 text-white rounded-[30px] overflow-hidden'>
        <FaRegFileAlt />
        <p className='font-semibold text-xs leading-tight mt-3'>{data.desc}</p>
        <div className="footer absolute left-0 bottom-0 w-full">
        <div className='px-5 py-3 flex items-center justify-between'>
            <h5>{data.filesize}</h5>
            <div className='w-[25px]  flex  items-center justify-center h-[25px] rounded-full bg-zinc-600 font-semibold text-md text-zinc-200'>
                {data.close?<RiCloseLine />:<GoDownload />}
                </div>
        </div>
        {data.tag.isopen && (
        <div className='tag flex items-center justify-center  py-3 w-full bg-green-600'>
        <h3 className='text-xs text-white font-semibold'>{data.tag.tagTitle}</h3> 
        </div>

        )}

        </div>
    </motion.div>
    )
}

export default Card