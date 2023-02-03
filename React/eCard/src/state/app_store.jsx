import { createStore } from "redux";
import appReducer from "./appReducer";
const appStore = createStore(appReducer);
export default appStore;