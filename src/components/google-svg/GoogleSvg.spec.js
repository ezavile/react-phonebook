import React from 'react';
import { shallow } from 'enzyme';
import GoogleSvg from './GoogleSvg';

describe('GoogleSvgComponent', () => {
  let googleSvgComponent;
  beforeEach(() => {
    googleSvgComponent = shallow(<GoogleSvg />);
  });

  it('sould render <GoogleSvg />', () => {
    expect(googleSvgComponent.getElements()).toMatchSnapshot();
  });
});
