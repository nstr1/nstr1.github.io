import React from "react";
import { shallow } from 'enzyme'; 
import { Route } from 'react-router';
import  App   from "./App.js";
import  Registration  from "./components/Registration";

it('should render all paths', () =>  {
    const wrapper = shallow(<App />);
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});


    expect(pathMap["/registration"]).toBeInstanceOf(Function);
    expect(pathMap["/login"]).toBeInstanceOf(Object);
    expect(pathMap["/admin"]).toBeInstanceOf(Object);
});

it
