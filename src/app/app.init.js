/**
 * Created by wangzhongchun on 6/16/2016.
 */
import React from 'react';
import AppRoot from './components/appRoot/appRoot';
class App{
    constructor(params){
        this.state = params.state;
    }
    render(element){
        let appRootElement = React.createElement(AppRoot,{
           state:this.state,
           readonly:'true'
       });
        if(element){
            React.render(appRootElement,element);
            return;
        }
        return React.renderToString(appRootElement);
    }
    renderToDOM (element) {
        this.render(element);
    }
    renderToString () {
        return this.render();
    }
}
export default App;