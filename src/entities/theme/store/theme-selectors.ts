//types
import type { RootState } from '../../../shaared/store/models/store.model';
import type { Themes } from '../model/theme.model';

const SelectorGetTheme =
  () =>
    (state: RootState): Themes => {
      return state.app.theme;
    };

export { SelectorGetTheme };
