import React, { useState } from 'react';
import { themeObject } from 'theme/theme';

export default function useDarkMode() {
  const [ theme, setTheme ] = useState(themeObject);

  const { palette: { type } } = theme;
  const toggleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === 'light' ? 'dark' : 'light',
      },
    };
    setTheme(updatedTheme);
  };
  return [ theme, toggleDarkMode ];
}
