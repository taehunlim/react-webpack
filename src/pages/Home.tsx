import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import ListContainer from "../components/ListContainer/ListContainer";

import {setTasks} from '../redux/actions/actions';

import tasks from "../../fixtures/tasks";


const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTasks(tasks));
    }, [])

    return (
        <div>
            <h1>To-do</h1>
            <ListContainer/>
        </div>
    );
};

export default Home;