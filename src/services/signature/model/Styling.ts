export interface Styling {
  /**
   * The color theme for the application.
   */
  colorTheme?: Styling.ColorThemeEnum;

  /**
   * The theme color mode, specify if you want it dark or light themed. Defaults to light
   */
  themeMode?: Styling.ThemeModeEnum;

  /**
   * The type of spinner to show in loading screens.
   */
  spinner?: Styling.SpinnerEnum;

  /**
   * If you want to hide the top bar, set this property to true (can be a good choice in iframe mode)
   */
  hideTopBar?: boolean;

  /**
   * Override the application background color (use hexadecimal value)
   */
  backgroundColor?: string;

}
export namespace Styling {
  export type ColorThemeEnum = 'Default' | 'Black' | 'Blue' | 'Cyan' | 'Dark' | 'Lime' | 'Neutral' |
    'Pink' | 'Purple' | 'Red' | 'Teal' | 'Indigo' | 'LightBlue' | 'DeepPurple' | 'Green' | 'LightGreen'
    | 'Yellow' | 'Amber' | 'Orange' | 'DeepOrange' | 'Brown' | 'Gray' | 'BlueGray';
  export type ThemeModeEnum = 'Default' | 'Light' | 'Dark';
  export type SpinnerEnum = 'Document' | 'Classic' | 'Cubes' | 'Bounce';
}
