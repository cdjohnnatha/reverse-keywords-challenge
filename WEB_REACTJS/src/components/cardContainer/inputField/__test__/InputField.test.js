import React from 'react';
import { create } from 'react-test-renderer';
import '../../../../../jest.setup';
import InputField from '../InputField';

const changeWord = () => 'A';

describe('Test Inputfield component', () => {
  test('snapshot renders', () => {
    const component = create(<InputField onInputFieldChange={() => 'a'} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Inputfield component is a input element', () => {
    const component = create(
      <InputField value="Kenna" onInputFieldChange={() => changeWord('A')} />
    ).root;
    const inputField = component.findByType('input');

    expect(inputField.type).toBe('input');
    expect(inputField.props.value).toBe('Kenna');
  });
});
