import {extendTheme} from 'native-base'

export const makeTheme = () => {
  const theme = extendTheme({
    fontConfig: {
      Roboto: {
        100: {
          normal: 'Roboto-Light',
          italic: 'Roboto-LightItalic'
        },
        200: {
          normal: 'Roboto-Light',
          italic: 'Roboto-LightItalic'
        },
        300: {
          normal: 'Roboto-Light',
          italic: 'Roboto-LightItalic'
        },
        400: {
          normal: 'Roboto-Regular',
          italic: 'Roboto-Italic'
        },
        500: {
          normal: 'Roboto-Medium'
        },
        600: {
          normal: 'Roboto-Medium',
          italic: 'Roboto-MediumItalic'
        }
      }
    },

    font: {
      heading: 'Roboto',
      body: 'Roboto',
      mono: 'Roboto'
    }
  })

  return theme
}
