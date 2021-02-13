import React, { useState } from 'react';
import { themeObject } from 'theme/theme';
import {ThemeOptions} from '@material-ui/core'

export default function useDarkMode() {
  const [theme, setTheme] = useState<ThemeOptions >(themeObject);

  const {
    palette
  } = theme;

  const toggleDarkMode = () => {
    const updatedTheme: any = {
      ...theme,
      palette: {
        ...theme.palette,
        type: palette?.type === 'light' ? 'dark' : 'light',
      },
    };
    setTheme(updatedTheme);
  };
  return {theme, toggleDarkMode};
}
