export interface UiSettings {
  /**
   * Whether to hide the logo and title of the selected eID provider.
   */
  hideProviderHeader?: boolean;

  /**
   * Whether to hide the footer with the language switcher.
   */
  hideFooter?: boolean;

  /**
   * Whether to use light or dark theme.
   */
  themeMode?: UiSettings.ThemeMode;

  /**
   * The color theme to use.
   */
  colorTheme?: UiSettings.ColorTheme;
}

export namespace UiSettings {
  export type ThemeMode = 'light' | 'dark';

  export type ColorTheme = 'default' | 'light_blue';
}
