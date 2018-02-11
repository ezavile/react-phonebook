import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Login from './components/login';

describe('AppComponent', () => {
  it('should render <App />', () => {
    const appComponent = shallow(<App />);
    expect(appComponent.find(Login)).toHaveLength(1);
  });
});
