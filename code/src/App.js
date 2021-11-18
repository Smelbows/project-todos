import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "@reduxjs/toolkit";

import todos from "reducers/todos";
import Header from "components/Header";
import ToDoList from "components/ToDoList";
import CreateToDo from "components/CreateToDo";

const reducer = combineReducers({
    todos: todos.reducer,
});

const persistedStateJSON = localStorage.getItem("todosReduxState");
let persistedState = {};

if (persistedStateJSON) {
    persistedState = JSON.parse(persistedStateJSON);
}

const store = createStore(reducer, persistedState);

store.subscribe(() => {
    localStorage.setItem("todosReduxState", JSON.stringify(store.getState()));
});

export const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <CreateToDo />
            <ToDoList />
        </Provider>
    );
};
