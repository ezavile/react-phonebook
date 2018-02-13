import React from 'react';
import { shallow } from 'enzyme';
import CardImage from './CardImage';

describe('CardImageComponent', () => {
  let cardImageComponent;
  const title = 'react-phonebook!';
  beforeEach(() => {
    cardImageComponent = shallow(<CardImage title={title} image="path/image.png" />);
  });

  it('sould render <CardImage />', () => {
    expect(cardImageComponent.getElements()).toMatchSnapshot();
  });

  it('should contain an image as background', () => {
    expect(cardImageComponent.hasClass('CardImage')).toBe(true);
  });

  it('should have a title', () => {
    expect(cardImageComponent.find('h2')).toHaveLength(1);
    expect(cardImageComponent.find('h2').text()).toBe(title);
  });
});
