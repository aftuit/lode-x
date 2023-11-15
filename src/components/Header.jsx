import React from 'react'
// import { style } from '../util/style'
const Header = ({ status }) => {
    return (
        <div className="container px-10 mx-auto pt-10">
            <div className="flex items-center bg-slate-200 rounded-[60px] overflow-hidden">
                <div className="left-content h-full">
                    <img src={`/assets/imgs/${status}/main.png`} alt="" className='h-full' />
                </div>
                <div className="right-content text-center px-16 mx-auto ">
                    <h2 className='text-5xl font-extrabold'>
                        Универсальное решение <br /> для ваших нужд в <br /> одежде</h2>
                    <p className='mt-8 text-xl'>Bce, что вам нужно, чтобы найти идеальный предмет
                        одежды, есть в <br /> Lode X. Мы предлагаем одежду ведущих брендов
                        и редактирование <br /> изображений на ней.</p>

                    <div className='block mt-10 ms-auto text-xl text-blue text-right border-b w-fit border-blue cursor-pointer'>читать далее {'->'}</div>
                </div>
            </div>
        </div>
    )
}

export default Header