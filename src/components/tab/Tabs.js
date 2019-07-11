import React from 'react';
import Tab from './Tab';

const Tabs = ({ activeTabIndex, data, handleTabClick }) => (
    <div>
        {data.map(({ label }, index) => {
            const isActive = activeTabIndex === index;
            return (
                <Tab
                    label={label}
                    isActive={isActive}
                    handleTabClick={handleTabClick}
                    tabIndex={index}
                />
            );
        })}
    </div>
);

export default Tabs;