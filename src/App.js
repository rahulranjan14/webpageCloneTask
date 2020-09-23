import React from 'react';
import NavigBar from './NavigBar';
import HeroSection from './HeroSection';
import SectionMid from './SectionMid';
import SectionMidTwo from './SectionMidTwo';
import PlansSection from './PlansSection';
import './App.css';

const App = () => {

    return(
      <div>

        <NavigBar />
        <HeroSection />
        <SectionMid />
        <SectionMidTwo />
        <PlansSection />
      </div>
    )

}

export default App;
