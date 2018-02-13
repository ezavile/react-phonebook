import React from 'react';
import { mount } from 'enzyme';
import ListContact from './ListContact';
import CardContact from '../card-contact/CardContact';

describe('ListContactComponent', () => {
  let listContactComponent;
  const contacts = [
    {
      id: '1',
      img: 'https://randomuser.me/api/portraits/men/83.jpg',
      name: 'Edgar Zavala',
      nickname: 'ezavala',
      group: 'friends',
    },
    {
      id: '2',
      img: 'https://randomuser.me/api/portraits/men/84.jpg',
      name: 'Juan Zavala',
      nickname: 'jazavala',
      group: 'friends',
    },
  ];

  beforeEach(() => {
    listContactComponent = mount(<ListContact contacts={contacts} />);
  });

  it('sould render <ListContact />', () => {
    expect(listContactComponent.getElements()).toMatchSnapshot();
  });

  it('should contain two <CardContact />', () => {
    expect(listContactComponent.find(CardContact)).toHaveLength(2);
  });
});
