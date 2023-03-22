import React, { useContext } from 'react';
import { ThemesContext, isDarkMode, DarkModeContext } from '../../App';

export default function FirstComponent() {
  const themes = useContext(ThemesContext);
  const isDarkMode = useContext(DarkModeContext);

  const styles = {
    background: isDarkMode ? themes.dark.background : themes.light.background,
    color: isDarkMode ? themes.dark.foreground : themes.light.foreground,
  };

  return (
    <p style={styles}>
      FirstComponent Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nesciunt odio
      nostrum esse, nihil pariatur dolores soluta tenetur tempora libero itaque, deleniti velit
      molestiae inventore molestias hic asperiores dignissimos et!
    </p>
  );
}
