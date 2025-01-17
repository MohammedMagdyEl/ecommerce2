import { createStore } from "redux";
import { reducerProduct } from "../reducer/reducerProduct";
import { composeWithDevTools } from "redux-devtools-extension";


export const store = createStore(reducerProduct, composeWithDevTools());






