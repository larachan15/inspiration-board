import React from 'react';
import Board from './Board';
import { shallow } from 'enzyme';


describe('Board', () => {
  test('that it matches an existing snapshot for deleting', () => {
    const wrapper = shallow( <Board deleteCard={() => {} } />);
    expect(wrapper).toMatchSnapshot();
  });
  
  test('that it matches an existing snapshot for adding', () => {
    const wrapper = shallow( <Board addCard={() => {} } />);
    expect(wrapper).toMatchSnapshot();
  });
});
