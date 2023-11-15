import React from 'react'
import { blogs } from '../util/mock'
import Title from './Title';
import Blog from './Blog';
export const BlogsContent = () => {

    const { title, contents } = blogs;

    return (
        <div className="px-[100px] mt-16 mb-8">
            <div className=" border-t border-slate-950 pt-6"></div>
            <div>
                <Title title={title} />
            </div>
            <div className="grid grid-cols-2 gap-16 container mx-auto mt-12">
                {
                    contents.map(content => <Blog key={content.id} content={content} />)
                }
            </div>
        </div>
    )
}

