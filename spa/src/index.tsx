import * as React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Text from './components/Text';

render(
    <div>
        <App message="World" />
        <Text message="World" />
    </div>,
    document.getElementById('root'),
);