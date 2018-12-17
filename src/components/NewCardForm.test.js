import React from 'react';
import NewCardForm from './NewCardForm';
import { shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot for adding', () => {
    const wrapper = shallow(
      <NewCardForm  />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
