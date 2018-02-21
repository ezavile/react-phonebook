import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Login from './scenes/login';

describe('AppComponent', () => {
  it('should render <Login />', () => {
    const appComponent = shallow(<App />);
    expect(appComponent.find(Login)).toHaveLength(1);
  });
});
