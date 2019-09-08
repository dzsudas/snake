import React from 'react';
import './App.css';
import Field from "./Field";
import {Provider} from "react-redux";
import store, {MOVE, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, MOVE_TO, MOVE_UP, SET_DIRECTION} from "store";


setInterval(() => {
    const [headPosX, headPosY] = store.getState().snake[store.getState().snake.length - 1];
    const [maxX, maxY] = store.getState().fields;

    switch (store.getState().direction) {
        case MOVE_LEFT.type:
            if (headPosY === 0) {
                store.dispatch(MOVE_TO([headPosX, maxY - 1]));
            } else {
                store.dispatch(MOVE([0, -1]));
            }
            break;
        case MOVE_UP.type:
            if (headPosX === 0) {
                store.dispatch(MOVE_TO([maxX - 1, headPosY]));
            } else {
                store.dispatch(MOVE([-1, 0]));
            }
            break;
        case MOVE_RIGHT.type:
            if (headPosY === maxY - 1) {
                store.dispatch(MOVE_TO([headPosX, 0]));
            } else {
                store.dispatch(MOVE([0, 1]));
            }
            break;
        case MOVE_DOWN.type:
            if (headPosX === maxX - 1) {
                store.dispatch(MOVE_TO([0, headPosY]));
            } else {
                store.dispatch(MOVE([1, 0]));
            }
            break;
    }
}, 500);

document.documentElement.addEventListener('keydown', (e: KeyboardEvent) => {
    switch (e.code) {
        case 'ArrowLeft':
            if (store.getState().direction === MOVE_RIGHT.type) return
            store.dispatch(SET_DIRECTION(MOVE_LEFT.type));
            break;
        case 'ArrowUp':
            if (store.getState().direction === MOVE_DOWN.type) return
            store.dispatch(SET_DIRECTION(MOVE_UP.type));
            break;
        case 'ArrowRight':
            if (store.getState().direction === MOVE_LEFT.type) return
            store.dispatch(SET_DIRECTION(MOVE_RIGHT.type));
            break;
        case 'ArrowDown':
            if (store.getState().direction === MOVE_UP.type) return
            store.dispatch(SET_DIRECTION(MOVE_DOWN.type));
            break;
    }

});

const App: React.FC = () =>
    <Provider store={store}>
        <div className="App">
            <Field/>
        </div>
    </Provider>
;

export default App;
