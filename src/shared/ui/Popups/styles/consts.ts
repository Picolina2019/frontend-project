import { DropdownDirection } from 'shared/types/ui';
import styles from './popups.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': styles.optionsBottomLeft,
  'bottom right': styles.optionsBottomRight,
  'top right': styles.optionsTopRight,
  'top left': styles.optionsTopLeft,
};
