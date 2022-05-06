import React from 'react';
import AppHero from '../home/hero';
import AppAbout from '../home/about'
import AppFeature from '../home/feature'
import AppFooter from '../common/footer' ;
import AppContact from '../home/contact'
import AppProject from '../home/projects'

function AppHome() {
    return ( 
        <div className='main'>
            <AppHero />
            <AppAbout />
            <AppFeature />

            <AppProject/>
            <AppContact />
            <AppFooter />

        </div>
    )
}
export default AppHome;