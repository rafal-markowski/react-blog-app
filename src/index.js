import React from 'react';
import ReactDOM from 'react-dom';

import { Layout } from './components/all-components';
import App from './App';

ReactDOM.render(
    <Layout>
        <App />
    </Layout>,
    document.querySelector('#root')
);