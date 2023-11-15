import React from 'react'
import { Outlet } from 'react-router-dom'
import { Brends } from '../components/Brends'
import { DesignersContent } from '../components/DesignersContent'
import { Features } from '../components/Features'
import { BlogsContent } from '../components/BlogsContent'
const Home = () => {
    return (
        <div>
            <Outlet />
            <div className="mx-auto w-full overflow-hidden">
                <Brends />
                <DesignersContent />
                <Features />
                <BlogsContent />
            </div>
        </div>
    )
}

export default Home