import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveTweets } from './tweets';
import { setAuthedUser } from './authedUser';


//hardcoding this, we will dispatch this so we can set it on the store
const AUTHED_ID = 'tylermcginnis';

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
        .then(({users, tweets}) => {
            //dispatching these actions to the store to populate it with initial data
            dispatch(receiveUsers(users));
            dispatch(receiveTweets(tweets));
            dispatch(setAuthedUser(AUTHED_ID))
        })
    }
}