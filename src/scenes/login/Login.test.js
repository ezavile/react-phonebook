import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { shallow } from 'enzyme';
import Login from './Login';
import { CardImage, GoogleSvg } from '../../components';

describe('LoginComponent', () => {
  it('should render <Login />', () => {
    const loginComponent = shallow(<Login />);
    expect(loginComponent.getElements()).toMatchSnapshot();
  });
  it('should have <CardImage />', () => {
    const loginComponent = shallow(<Login />);
    expect(loginComponent.find(CardImage)).toHaveLength(1);
  });
  it('should have <GoogleSvg />', () => {
    const loginComponent = shallow(<Login />);
    expect(loginComponent.find(GoogleSvg)).toHaveLength(1);
  });
  it('should have <RaisedButton />', () => {
    const loginComponent = shallow(<Login />);
    expect(loginComponent.find(RaisedButton)).toHaveLength(1);
  });
});
