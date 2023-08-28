import { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../../../assets";


const Navbar = () => {
  const [active,setActive] = useState<string>("'");
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
          <p className="text-white text-[18px] font-bold cursor-pointer sm:flex">Timofii &nbsp;
            <span className="sm:block hidden">
              | JS Mastery
            </span>
          </p>
        </Link>
        <div className="flex flex-row justify-between items-end w-1/2 2xl:w-1/4 xl:1/3">
          <div className="flex flex-row">
            <div className="w-[28px] h-[23px] flex justify-center border-r-white border-r "><span className="text-secondary">EN</span></div>
            <div className="w-[28px] h-[23px] flex justify-center "><Link to={`/portfolio/ua`}><span className="hover:text-secondary">UA</span></Link></div>
          </div>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link: {id: string, title: string}) => (
              <li 
                key={link.id} 
                className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
              <img 
                src={toggle ? close : menu} 
                alt="menu" 
                className="w-[28-px] h-[28px] object-contain cursor-pointer"
                onClick={() => setToggle(!toggle)}
              />
              <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 ronded-x1`}>
                <ul className="list-none flex justify-end items-start flex-col gap-4">
                  {navLinks.map((link: {id: string, title: string}) => (
                    <li 
                      key={link.id} 
                      className={`${active === link.title ? "text-white" : "text-secondary"} font-pointer font-medium cursor-pointer text-[16px]`}
                      onClick={() => {
                        setToggle(!toggle)
                        setActive(link.title)
                      }}>
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
          </div>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar