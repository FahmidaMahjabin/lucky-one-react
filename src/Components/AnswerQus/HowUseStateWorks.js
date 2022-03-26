import React from 'react';

const HowUseStateWorks = () => {
    return (
        <div class = "m-2 bg-secondary">
            <h1>How useState works</h1>
            <p>
            useState is a hook in React. There are 2 variables: one is the state variable and another is the setter variable. We initialize a value of the state variable

            For example:

            const [count, SetCount] = useState(0);

            We have initialized the value of count as 0 at the very start. This value is saved in a log file maintained by React. The value is updated by the setter, setCount like this:

            setCount(1)

            When we update the value like this, React changes the value in the log file and goes to an intermediate phase. In this phase, all the updated values in the log file are changed in the virtual DOM. When the values are updated, the virtual DOM is re-rendered and updated values are displayed. We can never manually change the value of the state without the setter.
            </p>
        </div>
    );
};

export default HowUseStateWorks;