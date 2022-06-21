import {
    TasksProps,
} from '../actions/actions';

import {
    SET_TASKS,
    DELETE_TASK,
    ActionType
} from '../actions/types';

interface InitialState {
    tasks: TasksProps[];
};

type Action = {
    type: ActionType;
    payload: any;
};

const initialState = {
    tasks: [],
};

export default function Reducer(state: InitialState = initialState, action: Action) {
    console.log(action.payload)
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                tasks: action.payload.tasks
            };

        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload.id)
            };
        default:
            return state
    }
}