import colors from '../../props/colors';
import sizing from '../../props/sizing';
import cv from '../../utils/cv';

const iconVariants = cv({
  variants: {
    width: sizing.width,
    height: sizing.height,
    size: sizing.size,
    color: colors.text,
  },
});

export default iconVariants;
