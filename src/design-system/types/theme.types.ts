import { colors } from "../foundations/colors";
import { typography } from "../foundations/typography";
import { spacing } from "../foundations/spacing";
import { grid } from "../foundations/grid";
import { iconography } from "../foundations/iconography";

export interface Theme {
  colors: typeof colors;
  typography: typeof typography;
  spacing: typeof spacing;
  grid: typeof grid;
  iconography: typeof iconography;
}
