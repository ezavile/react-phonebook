import React from 'react';
import { shallow } from 'enzyme';
import CardImage from './CardImage';
import FriendsImage from '../login/friends.jpeg';

describe('CardImageComponent', () => {
  let cardImageComponent;
  const title = 'react-phonebook!';
  beforeEach(() => {
    cardImageComponent = shallow(<CardImage title={title} image={FriendsImage} />);
  });

  it('sould render <CardImage />', () => {
    expect(cardImageComponent.getElements()).toMatchSnapshot();
  });

  fit('should contain an image', () => {
    expect(cardImageComponent.find('img')).toHaveLength(1);
    const { alt, src } = cardImageComponent.find('img').props();
    expect(alt).toBe(title);
    expect(src).toBe(FriendsImage);
  });

  it('should have a title', () => {
    expect(cardImageComponent.find('h2')).toHaveLength(1);
    expect(cardImageComponent.find('h2').text()).toBe(title);
  });
});
