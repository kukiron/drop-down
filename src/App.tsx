import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import listData from './data';
import './index.css';

const App: React.FunctionComponent = () => {
  const [listOpen, setListOpen] = useState(false);
  const [{ name, icon }, setSelectedItem] = useState(listData[0]);

  return (
    <div className="app">
      <h1>Visibility of Articles</h1>
      <h2>Select an option from drop-down menu</h2>
      <hr />
      <div className="drop-down">
        <Dropdown isOpen={listOpen} toggle={(): void => setListOpen(!listOpen)}>
          <DropdownToggle color="transparent" className="border">
            <i className={`fa fa-${icon}`} aria-hidden="true" />
            <span className="drop-down__title">{name}</span>
            <i className="fa fa-sort" aria-hidden="true" />
          </DropdownToggle>

          <DropdownMenu>
            {listData.map(option => (
              <DropdownItem
                key={option.name}
                className="drop-down__item"
                onClick={(): void => {
                  setSelectedItem(option);
                  setListOpen(false);
                }}
              >
                {option.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default App;
