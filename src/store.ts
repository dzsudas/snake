import * as _ from 'lodash';
import {combineReducers, configureStore, createAction, createReducer} from "redux-starter-kit";

export const MOVE_RIGHT = createAction('MOVE_RIGHT');
export const MOVE_LEFT = createAction('MOVE_LEFT');
export const MOVE_UP = createAction('MOVE_UP');
export const MOVE_DOWN = createAction('MOVE_DOWN');
export const MOVE = createAction('MOVE');
export const MOVE_TO = createAction('MOVE_TO');

export const SET_DIRECTION = createAction('SET_DIRECTION');

export const PLACE_CANDY = createAction('PLACE_CANDY');

const move = (array: any, [xDiff = 0, yDiff = 0]: number[] = []) => {
    const [lastX, lastY] = array[array.length - 1];

    return moveTo(array, [lastX + xDiff, lastY + yDiff])
};

const moveTo = (array: any, [xPosTo, yPosTo]: number[] = []) => {
    return [..._.drop(array), [xPosTo, yPosTo]];
};

export default configureStore({
    reducer: combineReducers({
        fields: createReducer([10, 20], {}),
        snake: createReducer<any>([[0, 0], [0, 1], [0, 2]], {
            [MOVE.type]: (snake, {payload}) => move(snake, payload),
            [MOVE_TO.type]: (snake, {payload}) => moveTo(snake, payload),
        }),
        direction: createReducer<any>(MOVE_RIGHT.type, {
            [SET_DIRECTION.type]: (state, {payload}) => payload
        }),
        candy: createReducer([-1, -1], {
            [PLACE_CANDY.type]: (state, {payload}) => payload
        })
    }),
    devTools: true
})