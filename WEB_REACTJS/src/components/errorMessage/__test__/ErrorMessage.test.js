import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import ErrorMessage from '../ErrorMessage';

import '../../../../jest.setup';

describe('Test ErrorMessage component', () => {
  test('ErrorMessage snapshot renders', () => {
    const wrapper = create(
      <ErrorMessage
        message="Network error"
        cleanErrorMessageHandler={function () {}}
      />
    );
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ErrorMessage should show a message when its set', () => {
    const wrapper = mount(
      <ErrorMessage
        message="Network error"
        cleanErrorMessageHandler={function () {}}
      />
    );
    expect(wrapper.props().message).toBe('Network error');
    // expect(cardsContainer.getElement().type).toBe('div');
  });
});
