import React from "react";
import ReactDom from "react-dom";
import {hot} from "react-hot-loader";

import 'core-js/stable';
import 'regenerator-runtime/runtime';

class App extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>
    }
}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById("app");
ReactDom.render(<AppWithHot name="Ivan" />, mountNode);