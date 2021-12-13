const theme = {
  background: '#FFFEFC',

  fontTitle: "'Alata', 'sans-serif'",
  fontContent: "Noto Sans KR', 'sans-serif",

  colorBlack: '#000',
  colorDarkGray: '#666',
  colorGray: '#898b8d',
  colorLightGray: '#f0f0f1',
  colorWhite: '#FFFFFF',

  fontLarge: '28px',
  fontMedium: '22px',
  fontRegular: '14px',
  fontSmall: '12px',
  fontMicro: '11px',

  weightBold: 700,
  weightSemiBold: 500,
  weightRegular: 400,
  weightThin: 300,

  marginCenter: '0 auto',

  flex: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
    `,

  absoluteCenter: `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  `,
};

export default theme;
