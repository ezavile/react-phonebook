import React from 'react';
import { shallow } from 'enzyme';
import CoverImage from './CoverImage';

describe('CoverImageComponent', () => {
  let coverImageComponent;

  beforeEach(() => {
    coverImageComponent = shallow(
      <CoverImage image="/path/img.png" title="some title" />
    );
  });

  it('should render <CoverImage />', () => {
    expect(coverImageComponent.getElements()).toMatchSnapshot();
  });

  it('should have a title', () => {
    expect(coverImageComponent.find('h1').text()).toBe('some title');
  });

  it('should have an image as a style', () => {
    expect(coverImageComponent.find('.CoverImage').html()).toContain(
      'url(/path/img.png)'
    );
  });
});
