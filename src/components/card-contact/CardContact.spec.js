import React from 'react';
import { shallow } from 'enzyme';
import CardContact from './CardContact';

describe('CardContactComponent', () => {
  let cardContactComponent;
  beforeEach(() => {
    cardContactComponent = shallow(<CardContact img="https://randomuser.me/api/portraits/men/83.jpg" name="Edgar" nickname="El Zavalia" group="Friends" />);
  });

  it('sould render <CardContact />', () => {
    expect(cardContactComponent.getElements()).toMatchSnapshot();
  });

  it('should contain an image', () => {
    expect(cardContactComponent.find('.CardContact-img')).toHaveLength(1);
  });

  it('should have a name', () => {
    expect(cardContactComponent.find('h2')).toHaveLength(1);
    expect(cardContactComponent.find('h2').text()).toBe('Edgar');
  });
});
