import React from 'react';
import { shallow } from 'enzyme';
import CardImage from './CardImage';

describe('CardImageComponent', () => {
  let cardImageComponent;
  beforeEach(() => {
    cardImageComponent = shallow(<CardImage />);
  });

  it('sould render <CardImage />', () => {
    expect(cardImageComponent.getElements()).toMatchSnapshot();
  });

  it('should contain an image', () => {
    expect(cardImageComponent.find('img')).toHaveLength(1);
    const { alt, src } = cardImageComponent.find('img').props();
    expect(alt).toBe('friends');
    expect(src).toBe('friends.jpeg');
  });
});
