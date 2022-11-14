import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MainMenu() {
  return (
    <nav>
      <div className="menu">
        <Link to="#">Menu Item 1</Link>
        <Link to="#">Menu Item 2</Link>
      </div>
    </nav>
  );
}
