import * as React from "react";
import { hot } from "react-hot-loader";
import "./../assets/scss/App.scss";
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from './../store/configureStore';
import RouteComponent from './Routing/RouteComponent';
const store = configureStore({}, history);
class App extends React.Component<{}, undefined> {
    public render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <RouteComponent />
                </BrowserRouter>
            </Provider>
        );
    }
}
declare let module: object;
export default hot(module)(App);


