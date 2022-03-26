import React from 'react';

const HowReactWorks = () => {
    return (
        <div class= "bg-secondary m-2">
            <h1>How React Works</h1>
            <p>React is a Javascript library which handles complex UI manipulation. In traditional frameworks/libraries, developers have to show/hide elements whereas React handles that. Devs only think of handling certain variables called State variables and the UI is manipulated automatically. To utilize reusability, React implements components which are declarative code and work independently. We can pass props (parameters) to these components to handle different types of data. React also handles hooks which are function components. These provide extra added functionalities, for example running a specific block of code at the start of each render (for example calling an API).React implements virtual Document Object Model (DOM) which is faster than DOM so the rendering is smooth and fast.</p>
        </div>
    );
};

export default HowReactWorks;