// import React from 'react';
import NavigationMenu from '../Components/NavigationMenu/NavigationMenu';
import MainMenu from '../Components/MainMenu/MainMenu';
import AdevertiseMenu from '../Components/AdvertiseMenu/AdevertiseMenu';

const HomePage = () => {
    return (
        <div className='flex justify-between'>
            <NavigationMenu/>
            <MainMenu/>
            <AdevertiseMenu/>
        </div>
    );
};

export default HomePage;