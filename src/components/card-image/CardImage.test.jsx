import React from 'react';
import { shallow } from 'enzyme';
import CardImage from './CardImage';

describe('CardImageComponent', () => {
  let cardImageComponent;

  beforeEach(() => {
    cardImageComponent = shallow(
      <CardImage bg="path/image" title="react-phonebook" />,
    );
  });

  it('should render <CardImage />', () => {
    expect(cardImageComponent.getElements()).toMatchSnapshot();
  });

  it('should have a title', () => {
    expect(cardImageComponent.find('h1')).toHaveLength(1);
  });

  it('should have a background-image', () => {
    expect(cardImageComponent.hasClass('CardImage')).toBe(true);
  });
});
