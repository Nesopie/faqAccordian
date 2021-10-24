import React, { useEffect } from 'react';
import CardContainer from './card.js';

function App() {
    useEffect(() => {
        const imgContainerHeight = document.querySelector(".imgContainer").offsetHeight;
        const wrapper = document.querySelector(".wrapper");
        wrapper.setAttribute("style", `bottom: ${imgContainerHeight*0.4}px; padding-top: ${imgContainerHeight*0.6}px`);
    });

  return (
      <CardContainer/>
  );
}

export default App;
