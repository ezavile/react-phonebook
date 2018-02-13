import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import App from './App';
import Login from './scenes/login';

test('should render <Login />', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </MemoryRouter>,
  );
  expect(wrapper.find(Login)).toHaveLength(1);
});
