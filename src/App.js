import React, { useState } from 'react';
import Header from './components/header';
import Top from './components/top';
import Projects from './components/projects';
import Footer from './components/footer';
import Experience from './components/experience'

function App() {
  const [selectedComponent, setSelectedComponent] = useState('Top');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Top':
        return <Top/>
      case 'Experience':
        return <Experience/>;
      case 'Projects':
        return <Projects/>;
      default:
        return null;
    }
  };

  return (
    <div className='App'>
      <Header onSelectComponent={setSelectedComponent} />
      {renderComponent()}
      <Footer/>
    </div>
  );
}

export default App;
