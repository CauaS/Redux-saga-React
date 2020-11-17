export const Types = {
    GET_USER_REQUEST : 'users/GET_USER_REQUEST',
    GET_USER_SUCCESS : 'users/GET_USER_SUCCESS',
    FAIL: 'users/FAIL',
    CREATE_USER_REQUEST: 'users/CREATE_USER_REQUEST',
    DELETE_USER_SUCCESS: 'users/DELETE_USER_SUCCESS',
}

export const getUsersRequest = () => ({ type: Types.GET_USER_REQUEST })

export const getUsersSuccess = ({ items }) => ({ type: Types.GET_USER_SUCCESS, payload: items })

// export const getUsersFail = ({ message }) => ({ type: Types.GET_USER_FAIL, payload: message  })

export const createUserRequest = ({firstName, lastName }) => ({ 
    type: Types.CREATE_USER_REQUEST,
    payload: { firstName, lastName }
})
export const deleteUserRequest = (userId) => ({ 
    type: Types.DELETE_USER_SUCCESS,
    payload: { userId }
})
