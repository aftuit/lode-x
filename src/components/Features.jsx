import React from 'react'
import { features } from '../util/mock'
import Title from './Title';
import Feature from './Feature';
export const Features = () => {
    
    const {title, adds} = features;

    return (
        <div className="px-[100px] mt-16 mb-8">
            <div className=" border-t border-slate-950 pt-6"></div>
            <div>
                <Title title={title} />
            </div>
            <div className="grid grid-cols-4 gap-16 container mx-auto">
                {
                    adds.map(add => <Feature key={add.id} add={add} />)
                }
            </div>
        </div>
    )
}
