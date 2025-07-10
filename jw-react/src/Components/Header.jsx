import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);


    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    return (
        <>
            <header>
                <div className={`nav-bar d-flex justify-content-between align-items-center p-3 ${isScrolled ? 'nav-bar-scrolled' : 'nav-bar-noScrolled'}`}>
                    <div className={`${isScrolled ? 'left-col-scrolled' : 'left-col-noScrolled'} d-flex gap-2`}>
                      <NavLink to={'/'}  >Home</NavLink>
                        <NavLink to={'/collections'}>Collections</NavLink>
                        <NavLink to={'/shop'}>Shop</NavLink>
                    </div>
                    <div className={`brand-col ${isScrolled ? 'brand-col-scrolled' : 'brand-col-noScrolled'}`}>JW <span>
                        <img src="img/jw_logo.png" alt="" />
                        </span> LUX</div>
                    <div className={`${isScrolled ? 'left-col-scrolled' : 'left-col-noScrolled'} d-flex gap-2`}>
                        <Link to={'/cart'}>Cart</Link>
                        <a href="">Search</a>
                    </div>
                </div>
            </header>
        </>
    )
}