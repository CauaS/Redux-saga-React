import { takeEvery , takeLatest, take, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/user';
import * as api from "../../api/users";

function* workerGetUsers(){
    try {
        const result = yield call(api.getUsers);
        // yield put({ type: actions.Types.GET_USER_SUCCESS, payload: result.data })
        yield put(actions.getUsersSuccess({ items : result.data }))
        
    } catch (error) {
        console.error(error)
        yield put({ type: actions.Types.FAIL, payload: { error } })
    }
}

function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USER_REQUEST, workerGetUsers)
}

function* workerCreateUser(action){
    try {
        const { firstName, lastName } = action.payload;
        yield call(api.createUser,  { firstName, lastName });
        yield call(workerGetUsers);
    } catch (error) {
        yield put({ type: actions.Types.FAIL, payload: { error } })
    }
}

function* watchCreateUserRequest(){
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, workerCreateUser)
}

function* workDeleteUser({ userId }){
    try {
        yield call(api.deleteUser, userId )
        yield call(workerGetUsers)
    } catch (error) {
        console.log(1)
        yield put({ type: actions.Types.FAIL, payload: { error } })
    }
}

function* wathDeleteUserRequest(){
    while(true){
        const action = yield take(actions.Types.DELETE_USER_SUCCESS);
        yield call(workDeleteUser, { userId: action.payload.userId })
    }
}


const usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest),
    fork(wathDeleteUserRequest),
];

export default usersSagas;

