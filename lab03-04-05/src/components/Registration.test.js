import React from "react";
import { shallow } from 'enzyme'; 
import Registration  from "./Registration.js";

it('should render Registration correctly', () => {
    const wrapper = shallow(<Registration />);
    const h1 = wrapper.find("h1").text();

    expect(h1).toBe('Sign up');
});