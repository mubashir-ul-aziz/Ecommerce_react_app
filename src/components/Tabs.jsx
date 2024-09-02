
import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <div className='tab-component'>
      {/* Tab Navigation */}
      <div className="tabs">
        {children.map((child) => {
          const { label } = child.props;
          return (
            <button
              key={label}
              onClick={() => handleTabClick(label)}
              className={` ${label === activeTab ? 'active' : ''} `}
            >
              {label}
            </button>
          );
        })}
      </div>
      
      {/* Tab Content */}
      <div className="tab-content-body">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

export default Tabs;
