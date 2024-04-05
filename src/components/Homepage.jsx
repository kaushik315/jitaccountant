import React from 'react';
import TopSection from './TopSection';
import NavigationBar from './NavBar';


const Homepage = () => {
    return (
        <div className="homepage">
            <TopSection />
            <NavigationBar />
            {/* Additional sections/components can be added here */}
        </div>
    );
};

export default Homepage;
