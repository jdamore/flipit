'use strict';

import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

ReactDom.render(<App numCards="1"/>, document.getElementById('app'));