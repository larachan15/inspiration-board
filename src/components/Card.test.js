import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  test('that it matches an existing card snapshot', () => {
    const wrapper = shallow( <Card
      text="My message!"
      emoji="black_heart"
      deleteCardCallback={() => {} } />);
      expect(wrapper).toMatchSnapshot();
    });
  });
