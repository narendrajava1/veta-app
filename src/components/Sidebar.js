import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="/cow-list">Cow List</a>
        </li>
        <li>
          <a href="/health-records">Health Records</a>
        </li>
        <li>
          <a href="/milk-production">Milk Production</a>
        </li>
        <li>
          <a href="/breeding-records">Breeding Records</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
