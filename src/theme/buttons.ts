import colors from './colors';
import { Buttons } from './buttons.types';

const buttons: Buttons = {
  variants: {
    solid: {
      primary: {
        color: colors.graphite2H,
        bgColor: colors.blueberryClassic,
        hoverBgColor: colors.radiantBlueberry,
        activeBgColor: colors.dietBlueberry,
        disabledBgColor: colors.dietBlueberry,
      },
      danger: {
        color: colors.graphite5H,
        bgColor: colors.cherry,
        hoverBgColor: colors.strawberry,
        activeBgColor: colors.pumpkin,
        disabledBgColor: colors.graphiteB,
      },
    },
    outline: {
      primary: {
        color: colors.graphite3B,
        bgColor: colors.graphite5H,
        hoverBgColor: colors.graphite3H,
        activeBgColor: colors.graphite2H,
        disabledBgColor: colors.graphite2H,
        disabledColor: colors.graphiteB,
        borderColor: colors.graphiteHB,
        disabledBorderColor: colors.graphiteH,
      },
    },
    text: {
      primary: {
        color: colors.blueberryClassic,
        hoverColor: colors.radiantBlueberry,
        activeColor: colors.dietBlueberry,
        disabledColor: colors.graphiteB,
      },
      secondary: {
        color: colors.graphite2B,
        hoverColor: colors.graphite4B,
        activeColor: colors.graphite5B,
        disabledColor: colors.graphiteB,
      },
      danger: {
        color: colors.cherry,
        hoverColor: colors.strawberry,
        activeColor: colors.pumpkin,
        disabledColor: colors.graphiteB,
      },
    },
  },
  heights: {
    md: 32,
    lg: 48,
    sm: 24,
  },
};

export default buttons;
