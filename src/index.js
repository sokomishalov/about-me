import React from 'react';
import {createRoot} from 'react-dom/client';

import './index.css';
import "./styles/antd.css"

import App from './app/App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);