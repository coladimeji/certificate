import React, { useState, useEffect, useCallback } from 'react';

const App = () => {
  const [textValues, setTextValues] = useState({
    textName: 'Christopher Desmond Oladimeji',
      textStudent: '185796',
      textIssue: '12/20/2023',
      textHours: '30',
    // ... other default values for text elements ...
  });

  const handleTextChange = (id, value) => {
    setTextValues(prev => ({ ...prev, [id]: value }));
  };

  const updateSVGText = useCallback(() => {
    const svgObject = document.getElementById('oshaSvg');
    if (svgObject && svgObject.contentDocument) {
      const svgDocument = svgObject.contentDocument;

      Object.entries(textValues).forEach(([id, value]) => {
        const textElement = svgDocument.getElementById(id);
        if (textElement) textElement.textContent = value;
      });
    }
  }, [textValues]);

  useEffect(() => {
    updateSVGText();
  }, [updateSVGText]);

  const resetToDefault = () => {
    setTextValues({
      textName: 'Christopher Desmond Oladimeji',
      textStudent: '185796',
      textIssue: '12/20/2023',
      textHours: '30',
      // ... other default values for text elements ...
    });
  };

  return (
    <div>
      <object id="oshaSvg" type="image/svg+xml" data="./Osha.svg" width="1677mm" height="1080mm">
        Your browser does not support SVG
      </object>

      {/* Form for updating text */}
      <form>
        {Object.entries(textValues).map(([id, value]) => (
          <label key={id}>
            {id}:
            <input type="text" value={value} onChange={(e) => handleTextChange(id, e.target.value)} />
          </label>
        ))}
      </form>

      <button onClick={updateSVGText}>Update Text</button>
      <button onClick={resetToDefault}>Reset to Default</button>
    </div>
  );
};

export default App;
