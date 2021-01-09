import _ from 'lodash'
import {CREATE_EVENTS, READ_EVENT,READ_EVENTS, DELETE_EVENT, UPDATE_EVENT} from '../actions'


// eslint-disable-next-line import/no-anonymous-default-export
export default (events={}, action) => {
    switch(action.type){
        case CREATE_EVENTS:
        case UPDATE_EVENT:
        case READ_EVENT:
            const data =action.response.data
            return {...events, [data.id]: data}
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id')
        case DELETE_EVENT:
            delete events[action.id]
            return {...events}
        default:
            return events
    }
}