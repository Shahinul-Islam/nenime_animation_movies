// import React from 'react';
import { FaHome } from "react-icons/fa";

const Menu = () => {
    return (
        <div>
            <h4 className="mb-4">Menu</h4>
            <div>
                <ul>
                    <li>
                        <a className="flex items-center gap-2"><span><FaHome/></span><span>Home</span></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;