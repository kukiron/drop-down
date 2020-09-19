import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { shallow } from 'enzyme';

import App from '../App';
import listData from '../data';

const wrapper = shallow(<App />);
const dropDown = wrapper.find(Dropdown);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sampleEvent: any = {};

describe('App', () => {
  it('should render a drop-down component', () => {
    expect(dropDown).toBeDefined();
    expect(dropDown.length).toBe(1);
    expect(dropDown.props().isOpen).toBe(false);
  });

  it('should render a transparent toggle component', () => {
    const dropDownToggle = wrapper.find(DropdownToggle);

    expect(dropDownToggle).toBeDefined();
    expect(dropDownToggle.length).toBe(1);
    expect(dropDownToggle.props().color).toBe('transparent');
  });

  it('should render drop-down options when toggle button is clicked', () => {
    dropDown.props().toggle?.(sampleEvent);
    const dropDownMenu = wrapper.find(DropdownMenu);
    const dropDownItems = wrapper.find(DropdownItem);

    expect(dropDownMenu).toBeDefined();
    expect(dropDownMenu.length).toBe(1);
    expect(dropDownItems.length).toBe(listData.length);
  });

  it('should select the correct option when clicked', () => {
    const firstItem = wrapper.find(DropdownItem).at(0);

    firstItem.props().onClick?.(sampleEvent);
    const selectedOption = wrapper.find('.drop-down__title').props().children;
    expect(selectedOption).toBe(listData[0].name);
  });
});
