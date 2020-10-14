import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {loginReducer} from "./loginReducer";
import {registrationReducer} from "./registrationReducer";
import {profileReducer} from "./profileReducer";
import {passwordRecoveryReducer} from "./passwordRecoveryReducer";
import {enteringNewPasswordReducer} from "./enteringNewPasswordReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    passwordRecovery: passwordRecoveryReducer,
    enteringNewPassword: enteringNewPasswordReducer,
    profile: profileReducer

})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store