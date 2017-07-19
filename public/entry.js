/**
 * Created by baiying on 7/19/17.
 */
require("!style-loader!css-loader!./style.css");
import React from 'react';
import {render} from 'react-dom';

import App from './component/app';

render(<App />,document.getElementById('app'));