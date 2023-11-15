import React from "react"
import { NavLink, Link } from "react-router-dom"
import { routes } from "../util/routes"
import logo from "../assets/icons/logo.svg"
import wish from "../assets/icons/wishlist.svg"
import cart from "../assets/icons/cartlist.svg"
import { useUserContext } from '../context/context';

export const Navbar = () => {
    const { wishlist, setCartOpen, cartlist } = useUserContext();
    return (
        <div className="container mx-auto px-6 py-2">
            <nav className="flex items-center justify-between">
                <Link>
                    <img src={logo} alt="" />
                </Link>

                <ul className="flex gap-12">
                    {
                        routes.map(route =>
                            (route.name !== 'home') ?
                                <li key={route.path} className={route.id}>
                                    <NavLink
                                        to={route.path}
                                        className={({ isActive }) => isActive ? 'text-blue font-bold underline' : 'text-black'}>
                                        {route.label}
                                    </NavLink>
                                </li> : <div key={route.id}></div>)
                    }
                </ul>
                <div className="buttons flex gap-10">
                    <button className="relative">
                        <img src={wish} alt="" />
                        {
                            wishlist.length ?
                                <span className="text-blue absolute -top-3 -right-3 text-xl font-bold">{wishlist.length}</span>
                                : <></>
                        }
                    </button>
                    <button onClick={() => setCartOpen(true)} className="relative">
                        <img src={cart} alt="" />
                        {
                            cartlist.length ?
                                <span className="text-blue absolute -top-3 -right-3 text-xl font-bold">{cartlist.length}</span>
                                : <></>
                        }
                    </button>
                    <button className="bg-blue p-3">
                        Contact Us
                    </button>
                </div>
            </nav>
        </div>
    )
}