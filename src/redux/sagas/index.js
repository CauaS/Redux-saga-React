import { all  } from "redux-saga/effects";
import usersSagas from '../sagas/users';

export default function* rootSaga(){
    yield all([
        ...usersSagas
    ])
}
