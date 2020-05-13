import React from 'react';
import { create } from 'react-test-renderer';
import Card from '../Card';

const onSingleLetterClickHandler = () => {};

describe('Test Card component', () => {
  test('Card component has className container', () => {
    const component = create(
      <Card onSingleLetterClickHandler={onSingleLetterClickHandler} />
    ).root;
    const cardContainer = component.findByType('div');

    expect(cardContainer.type).toBe('div');
  });
});
