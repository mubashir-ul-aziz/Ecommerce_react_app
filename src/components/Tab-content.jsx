import React from 'react';
import Tabs from './Tabs';
import Tab from './Tab';

const Tab_content = () => {
  return (
    <div className="App">
      <h1>Tab Functionality in React</h1>
      <Tabs>
        <Tab label="Tab 1">
          <h2>Content for Tab 1</h2>
          <p>This is the content of Tab 1.</p>
        </Tab>
        <Tab label="Tab 2">
          <h2>Content for Tab 2</h2>
          <p>This is the content of Tab 2.</p>
        </Tab>
        <Tab label="Tab 3">
          <h2>Content for Tab 3</h2>
          <p>This is the content of Tab 3.</p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Tab_content;
