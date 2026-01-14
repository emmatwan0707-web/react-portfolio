import React from 'react';
import { motion } from 'framer-motion';

const SkillCircle = ({ name, percent }) => {

    return (
        <div className='flex flex-col items-center'>
            <motion.div
                className="w-35 h-35 rounded-full flex items-center justify-center shadow-md"
                style={{
                    background:
                        'conic-gradient(#f59e0b 0% var(--p), #E5E7EB var(--p) 100%)',
                }}
                initial={{ '--p': '0%' }}
                whileInView={{ '--p': `${percent}%` }}
                transition={{
                    '--p': {duration: 1.2, ease: 'easeInOut'},
                    scale: {duration: 0.2, ease: 'easeOut'},
                }}
                whileHover={{ scale: 1.05 }}
            >
                <div className='w-[85%] h-[85%] bg-white rounded-full flex flex-col items-center justify-center'>

                    <span className="text-[15px] font-medium text-slate-400 uppercase tracking-widest">{name}</span>
                </div>
            </motion.div>
        </div>
    )
}

export default SkillCircle;