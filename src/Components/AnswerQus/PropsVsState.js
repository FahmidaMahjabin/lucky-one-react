import React from 'react';

const PropsVsState = () => {
    return (
        <div class = "bg-secondary m-2">
            <h1>Props Vs State</h1>
            <p>
            State variable is used to store and display data in the DOM which can change.
Props should be used to pass data from parent to children. These passed data can definitely be states.

If props are passed to children and those need to be changed, the parent component must pass event handlers alongside to handle those changes. Child component can never modify the passed props manually.

We can pass as many props as possible to the child components, but in general there should be as minimum states as possible. Ideally, all states should be at the top component.

Many stateless components are used just to render the data. They take props as parameters and show them as required. 
            </p>
        </div>
    );
};

export default PropsVsState;