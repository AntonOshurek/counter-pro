//STORE
import appSlice from '../../../app/store/slices/app-slice';
//REPOSITORY
import appRepository from '../../../services/app-repository/app-repository';
//TYPES
import type { AppThunk } from '../../../app/store/model/store.model';
import type { ISetNewThemeAction } from '../model/actions.model';

const setNewThemeAction =
  (action: ISetNewThemeAction): AppThunk =>
    (dispatch, getState) => {
      dispatch(appSlice.actions.changeTheme(action));

      appRepository
        .setState(getState().app)
        .then(res => {
          if (res !== true) {
            console.log(res);
            //dispatch error if occur to redux and show this error in ui
          }
        })
        .catch(error => {
          console.log(error);
          //dispatch error if occur to redux and show this error in ui
        });
    };

export {setNewThemeAction};
