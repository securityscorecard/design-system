import colors from './colors';
import { Buttons } from './buttons.types';

const buttons: Buttons = {
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
      disabledBgColor: colors.strawberry,
    },
  },
  outline: {
    primary: {
      color: colors.graphite2B,
      bgColor: colors.graphite5H,
      hoverBgColor: colors.graphite4H,
      activeBgColor: colors.graphite3H,
      disabledBgColor: colors.graphite2H,
      disabledColor: colors.graphiteB,
      borderColor: colors.graphiteHB,
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
    },
    danger: {
      color: colors.cherry,
      hoverColor: colors.strawberry,
      activeColor: colors.pumpkin,
    },
  },
};

export default buttons;
