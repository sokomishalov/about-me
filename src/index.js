import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import "react-typist/dist/Typist.css"
import "./styles/antd.css"

import App from './app/App';

import {register as registerServiceWorker} from './util/sw/sw';

ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker();
