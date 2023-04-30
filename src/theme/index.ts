export interface AppTheme {
  pallette: {
    primary: string;
    shadow: string;
    text: string;
    light: string;
    error: string;
  };
}

export const defaultTheme: AppTheme = {
  pallette: {
    primary: '#0969DA',
    text: '#000000',
    shadow: '#000000',
    light: '#ffffff',
    error: '#ff0033',
  },
};
