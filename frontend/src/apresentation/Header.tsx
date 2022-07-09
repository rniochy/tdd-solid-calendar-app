import { useContext, useState } from 'react'
import {BiSun} from 'react-icons/bi'
import {BiMoon} from 'react-icons/bi'
import { AppContext } from '../App'

const Header = ()=> {
    const {changeTheme, setchangeTheme} = useContext(AppContext)
    const handerClick =() =>{
        if(changeTheme === "light-mode"){
            setchangeTheme("dark-mode")
        } else {
            setchangeTheme("light-mode")
        }
    }
    return (
            <div className="changeThemeContainer">
            <span className='myname'>
                Rodrigo Lima - rniochy
            </span>
                <i  onClick={handerClick} className={`changeTheme ${ changeTheme === 'light-mode'?`displayButtonNone`: '' }`}> <BiSun/></i>
                <i onClick={handerClick} className={`changeTheme ${ changeTheme === 'dark-mode'?`displayButtonNone`: ''}`}><BiMoon/></i>
            </div>
    );
}
export default Header