import React from 'react';
import icon from '../../dist/react-icon.png';
import Greeting from './greeting';

const App = () => (
        <div>
            <img src={icon}/>
            {/*<h1>Welcome To React</h1>*/}
            <Greeting name="Janet Watson"/>
        </div>
    );

export default App;
