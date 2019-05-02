export const SET_AUTHED_USER = 'AUTHED_USER';

export const setAuthedUser = (id) => {
    return  {
        type:'SET_AUTHED_USER',
        id
    }
}