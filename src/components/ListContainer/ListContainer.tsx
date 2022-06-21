import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {deleteTask} from '../../redux/actions/actions';
import {RootState} from "../../redux/reducers";

import List from "../List/List";

const ListContainer = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state: RootState) => {
        if(state.Reducer.tasks) {
            return state.Reducer.tasks
        } else {
            return []
        };
    });

    const handleClick = (id: number) => {
        dispatch(deleteTask(id));
    };

    return (
       <List tasks={tasks} onClick={handleClick}/>
    );
};

export default ListContainer;