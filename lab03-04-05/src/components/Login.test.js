import React from "react";
import { shallow } from 'enzyme'; 
import  Login  from "./Login.js";

it('should render "Login" correctly', () => {
    const wrapper = shallow(<Login />);
    const h3 = wrapper.find('h3').text();

    expect(h3).toBe('Log in');
});