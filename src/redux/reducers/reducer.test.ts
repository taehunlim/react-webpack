import reducer from './reducer';

import {deleteTask, setTasks} from "../actions/actions";
import {SET_TASKS, DELETE_TASK} from '../actions/types';

import tasks from "../../../fixtures/tasks";

describe('reducer', () => {
    describe(SET_TASKS, () => {
        it('changes tasks array', () => {
            const initialState = {
                tasks: []
            };

            //@ts-ignore
            const state = reducer(initialState, setTasks(tasks));

            expect(state?.tasks).not.toHaveLength(0);
        });
    });

    describe(DELETE_TASK, () => {
        it('removes the task from tasks', () => {
            const initialState = {
                tasks: [{id: 1, title: "title1"}]
            };

            //@ts-ignore
            const state = reducer(initialState, deleteTask(1));

            expect(state?.tasks).toHaveLength(0);
        });
    });
});