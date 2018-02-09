import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import CardImage from '../card-image';

describe('LoginComponent', () => {
  it('should render <Login />', () => {
    const loginComponent = shallow(<Login />);
    expect(loginComponent.getElements()).toMatchSnapshot();
  });
  it('should have <CardImage />', () => {
    const loginComponent = shallow(<Login />);
    expect(loginComponent.find(CardImage)).toHaveLength(1);
  });
});
