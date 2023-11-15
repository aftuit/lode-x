import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SERVER_PATH } from '../util/const';
import Loader from '../components/Loader';
import { ImageEditor } from '../components/ImageEditor';
import { getStatus } from '../util/const';

const Editor = () => {

    const [item, setItem] = useState([]);
    const [loader, setLoader] = useState(true);

    const { slug } = useParams();

    useEffect(() => {
        setLoader(true);
        fetch(`${SERVER_PATH}/${slug.split('-').join('/')}`, {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((response) => {
                setItem(response);
                console.log(response);
                setLoader(false);
            })
            .catch(() => setLoader(false))
            .finally(() => setLoader(false))
    }, [slug])


    return (
        <div>
            {
                loader ?
                    <Loader /> :
                    <>
                        <div className='px-[100px] py-5 bg-blue '>
                            <h1 className='text-3xl font-semibold'>Pattern Print</h1>
                            <div className="links flex gap-3 mt-2 ">
                                <Link to={'/'} className='text-white'>
                                    Главная
                                </Link>
                                <span className='text-white'>/</span>
                                <Link to={`/${item.status}`} className='text-white'>
                                    {getStatus(item.status)}
                                </Link>
                                <span className='text-white'>/</span>
                                <Link to={`/editor/${item.status}-${item.id}`} className='text-white'>
                                    {item.label}</Link>
                            </div>
                        </div>
                        <ImageEditor image={item.img} />
                    </>
            }
        </div>
    )
}

export default Editor