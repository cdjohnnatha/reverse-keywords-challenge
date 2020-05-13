import React from 'react';
import { create, act } from 'react-test-renderer';
import { mount } from 'enzyme';
import LetterCard from '../LetterCard';
import '../../../../../../jest.setup';

const onSingleLetterClickHandler = () => {};

describe('Test LetterCard component', () => {
  test('snapshot renders', () => {
    const component = create(
      <LetterCard
        letter="K"
        letterIndexPosition={0}
        onSingleLetterClickHandler={onSingleLetterClickHandler}
        isFromWordHistory={false}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('LetterCard component is a div with one letter', () => {
    const component = create(
      <LetterCard
        letter="K"
        letterIndexPosition={0}
        onSingleLetterClickHandler={onSingleLetterClickHandler}
        isFromWordHistory={false}
      />
    ).root;
    const inputField = component.findByType('div');

    expect(inputField.type).toBe('div');
    expect(inputField.props.children).toBe('K');
  });
  test('LetterCard component should be green with considered as recentInput', () => {
    const component = mount(
      <LetterCard
        letter="K"
        letterIndexPosition={0}
        onSingleLetterClickHandler={onSingleLetterClickHandler}
        isFromWordHistory={false}
      />
    );

    expect(component.find('.green-bg').length).toBe(1);
    expect(component.find('.red-bg').length).toBe(0);
  });
  test('LetterCard component should be red with considered as history', () => {
    const component = mount(
      <LetterCard
        letter="K"
        letterIndexPosition={0}
        onSingleLetterClickHandler={onSingleLetterClickHandler}
        isFromWordHistory
      />
    );

    expect(component.find('.green-bg').length).toBe(0);
    expect(component.find('.red-bg').length).toBe(1);
  });
});
