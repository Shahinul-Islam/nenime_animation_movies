// import React from 'react';

import { Logo } from "./Logo/Logo";
import Menu from "./Menu/Menu";

const NavigationMenu = () => {
	return (
		<div className="bg-[#807c7c] h-screen px-16 py-8 flex flex-col gap-10">
			<div>
				<Logo />
			</div>
            <div>
                <Menu/>
            </div>
		</div>
	);
};

export default NavigationMenu;
