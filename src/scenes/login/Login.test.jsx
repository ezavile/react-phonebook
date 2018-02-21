import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('LoginComponent', () => {
  it('should render <Login />', () => {
    const loginComponent = shallow(<Login />);
    expect(loginComponent.getElements()).toMatchSnapshot();
  });
});
