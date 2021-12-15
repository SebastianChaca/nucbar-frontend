import { extendTheme } from '@chakra-ui/react';
export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: '#eceae9',
        margin: '0px',
      },
    },
  },
  colors: {
    nucba: {
      form: '#ffff',
      primary: '#ed1582',
      third: '#B84E9F',
      fourth: '#deb0eb',
      hover: '#212422',
      grisUno: '#666666',
      grisDos: '#999999',
      grisTres: '#E9E9E9 ',
      grisMeli: 'rgba(0,0,0,.45)',
      border: 'rgba(0, 0, 0, 0.1)',
      error: '#cc0000',
    },
  },
  textStyles: {
    pagetitle: {
      fontSize: '28px',
      fontWeight: '700',
      lineHeight: '42px',
    },
    title: {
      fontSize: '22px',
      fontWeight: '700',
      lineHeight: '33px',
    },
    subtitle: {
      fontSize: '18px',
      fontWeight: '600',
      lineHeight: '27px',
    },
    regular: {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '21px',
    },
    semiBold: {
      fontSize: '14px',
      fontWeight: '600',
      lineHeight: '21px',
    },
    captionRegular: {
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '18px',
    },
    captionSemiBold: {
      fontSize: '12px',
      fontWeight: '600',
      lineHeight: '18px',
    },
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: 'nucba.primary',
          color: 'nucba.form',
          _hover: {
            bg: 'nucba.hover',
          },
        },
      },
    },
  },
});
