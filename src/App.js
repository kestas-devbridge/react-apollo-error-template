import React, { useState } from "react";

import Person from './Person';

export default function App() {
    const [visible, setVisible] = useState(true);

    const handleVisibilityToggle = () => {
        setVisible((visible) => !visible);
    };

  return (
    <main>
      <h1>Apollo Client Issue Reproduction</h1>
        <p>
            Scenario:
        </p>
        <div style={{ display: 'flex' }}>
            <div>
                <ol>
                    <li>Select <b>John Smith</b> from from dropdown</li>
                    <li>Look into developers tools console</li>
                    <li><b>Resolve person with ID 1</b> should be logged out</li>
                    <li>Clear messages in console</li>
                    <li>Click on "Toggle visibility" button to hide and then again to show person view (component with query is unmounted and mounted again)</li>
                    <li>Select <b>Sara Smith</b> from dropdown</li>
                    <li>Look into developers tools console</li>
                    <li>2 messages: <b>Resolve person with ID 2</b> and <b>Resolve person with ID 1</b> will be logged out</li>
                    <li>Clear messages in console</li>
                    <li>Click on "Toggle visibility" button to hide and then again to show person view</li>
                    <li>Select <b>Budd Deey</b> from dropdown</li>
                    <li>Look into developers tools console</li>
                    <li>3 messages: <b>Resolve person with ID 3</b>, <b>Resolve person with ID 1</b> and <b>Resolve person with ID 2</b> will be logged out</li>
                </ol>
            </div>
            <div style={{ background: '#f0f0f0', flex: '1 1 auto', marginLeft: '20px', padding: '10px' }}>
                <button type="button" onClick={handleVisibilityToggle} style={{ marginBottom: '20px' }}>Toggle visibility</button>
                {visible && <Person />}
            </div>
        </div>
    </main>
  );
}
