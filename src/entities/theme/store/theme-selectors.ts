//types
import type { RootState } from '../../../app/store/model/store.model';
import type { Themes } from '../model/theme.model';

const SelectorGetTheme =
  () =>
    (state: RootState): Themes => {
      return state.app.theme;
    };

export { SelectorGetTheme };
