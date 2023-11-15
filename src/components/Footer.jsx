import React from 'react'
import { footerLinks } from '../util/mock'
import { Link } from 'react-router-dom'
import instagram from "../assets/icons/instagram.svg"
import facebook from "../assets/icons/facebook.svg"

export const Footer = () => {
    return (
        <div className="px-[100px] mt-16 mb-8">
            <div className="border-t border-slate-950 pt-6"></div>
            <div className="footer-links grid grid-cols-4 gap-16">
                {
                    footerLinks.map(foot =>
                        <div key={foot.id}>
                            <h5 className='font-bold text-2xl'>{foot.title}</h5>
                            <ul className='mt-3 text-slate-500'>
                                {
                                    foot.links.map(link =>
                                        <li key={link.id} className='mt-2'>
                                            <Link to={link.path} className='text-slate-500 transition-all hover:text-slate-700'>{link.label}</Link>
                                        </li>)
                                }
                            </ul>
                        </div>
                    )}
                <div>
                    <a href='tel:+998992807576' className='font-bold text-2xl block'>+998 ( 99 ) 280 75 76</a>
                    <span className='text-slate-500 transition-all hover:text-slate-700 mt-2 block'>example@gmail.com</span>
                    <span className='text-slate-500 transition-all hover:text-slate-700 mt-2 block'>example@mail.ru</span>
                    <div className="flex gap-5 mt-3">
                        <img src={instagram} alt="instagram" />
                        <img src={facebook} alt="facebook" />
                    </div>
                </div>
            </div>
        </div>
    )
}
