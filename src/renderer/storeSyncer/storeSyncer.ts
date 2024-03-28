import store from "../store"
import { setYear } from "../store/yearSlice";
import { setState } from "../store/dataSlice";

export const storeSyncer = {
  getStore() {
    window.electron.ipcRenderer.once('read-store', (arg) => {
      if (typeof arg === 'string') {
        async function f() {
          return arg;
        }
        store.dispatch(setYear(JSON.parse(arg).year.year))
        store.dispatch(setState(JSON.parse(arg).data.data))
      }
    });
    window.electron.ipcRenderer.sendMessage('read-store');
  },

  saveStore() {
    const stringifyStore = JSON.stringify(store.getState())
    console.log(stringifyStore)
    window.electron.ipcRenderer.sendMessage('save-store', [stringifyStore]);
  }
}
