import React from 'react';
import { create } from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import axios from 'axios';

import CardContainer from '../CardContainer';
import LetterCard from '../card/letterCard/LetterCard';
import Card from '../card/Card';
import '../../../../jest.setup';

const initialInputValueAsArray = ['K', 'e', 'n', 'n', 'a'];

const event = {
  target: { value: 'Tenna' },
};

let wrapper = null;
let inputFieldComponent = null;
let cardsContainer = null;
jest.mock('axios');

describe('Test CardContainer component', () => {
  test('CardContainer snapshot renders', () => {
    const component = create(<CardContainer />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  beforeEach(() => {
    wrapper = mount(<CardContainer />);
    inputFieldComponent = wrapper.find('input');
    cardsContainer = wrapper.find('.container');
  });

  test('InputField values is the same of each single card', () => {
    expect(inputFieldComponent.prop('value')).toBe('Kenna');
    expect(cardsContainer.getElement().type).toBe('div');

    cardsContainer
      .find('div')
      .getElements()
      .forEach((singleCard, index) => {
        if (typeof singleCard.props.children === 'string') {
          expect(singleCard.props.children).toBe(
            initialInputValueAsArray[index - 1]
          );
        }
      });
  });

  test('Change first letter at InputField it will change first letter at cards', () => {
    wrapper.find('input').simulate('change', event);
    expect(wrapper.find('input').prop('value')).toBe('Tenna');
    expect(wrapper.find('.container').find('div').at(1).text()).toBe('T');
    expect(wrapper.find('.container').find('div').length).toBe(6);
  });
  test('Change first letter at InputField it will change first letter at cards', () => {
    event.target.value = 'Last';
    wrapper.find('input').simulate('change', event);
    expect(wrapper.find('input').prop('value')).toBe('Last');
    expect(wrapper.find('.container').find('div').at(1).text()).toBe('L');
    expect(wrapper.find('.container').find('div').at(4).text()).toBe('t');
    expect(wrapper.find('.container').find('div').length).toBe(5);
  });
  test('Test click button to reverse words, should create a new card with not reverse word and change the recentInput with a reversed word', async () => {
    expect(wrapper.find('button').text()).toBe('Reverse the input text "Kenna"');

    let cardHistoryWrapper = wrapper.find('#card-history').find(Card);
    expect(cardHistoryWrapper.length).toBe(0);

    await act(async () => {
      await axios.get.mockResolvedValue({ data: { reverse_word: 'anneK' } });
      wrapper.find('button').simulate('click');
    });
    wrapper.update();
    expect(wrapper.find('input').prop('value')).toBe('Kenna');
    const currentCardInputs = wrapper
      .find('#current-card-inputs')
      .find(LetterCard);

    expect(currentCardInputs.at(0).text()).toBe('K');
    expect(currentCardInputs.at(1).text()).toBe('e');
    expect(currentCardInputs.at(2).text()).toBe('n');
    expect(currentCardInputs.at(3).text()).toBe('n');
    expect(currentCardInputs.at(4).text()).toBe('a');

    cardHistoryWrapper = wrapper.find('#card-history').find(Card);
    const historyCards = wrapper.find('#card-history').find(LetterCard);
    expect(historyCards.at(0).text()).toBe('a');
    expect(historyCards.at(1).text()).toBe('n');
    expect(historyCards.at(2).text()).toBe('n');
    expect(historyCards.at(3).text()).toBe('e');
    expect(historyCards.at(4).text()).toBe('K');
    expect(cardHistoryWrapper.length).toBe(1);
  });

  test('Test click button to reverse words, should create a new history card with red-bg the recentInput should keep green', async () => {
    expect(wrapper.find('button').text()).toBe('Reverse the input text "Kenna"');

    const cardHistoryWrapper = wrapper.find('#card-history').find(Card);
    expect(cardHistoryWrapper.length).toBe(0);

    await act(async () => {
      await axios.get.mockResolvedValue({ data: { reverse_word: 'anneK' } });
      wrapper.find('button').simulate('click');
    });
    wrapper.update();
    expect(wrapper.find('input').prop('value')).toBe('Kenna');
    const currentCardInputs = wrapper.find('.green-bg');
    expect(currentCardInputs.length).toBe(5);
    expect(currentCardInputs.at(0).text()).toBe('K');
    expect(currentCardInputs.at(1).text()).toBe('e');
    expect(currentCardInputs.at(2).text()).toBe('n');
    expect(currentCardInputs.at(3).text()).toBe('n');
    expect(currentCardInputs.at(4).text()).toBe('a');
    const historyCards = wrapper.find('.red-bg');
    expect(historyCards.length).toBe(5);
    expect(historyCards.at(0).text()).toBe('a');
    expect(historyCards.at(1).text()).toBe('n');
    expect(historyCards.at(2).text()).toBe('n');
    expect(historyCards.at(3).text()).toBe('e');
    expect(historyCards.at(4).text()).toBe('K');
  });
});
