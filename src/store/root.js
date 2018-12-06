import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { wallStore, fetchWallsEpic } from './wall'
import { emotionsStore } from './emotions'
import { distortionStore } from './distortions'
import { diariesStore } from './diaries'

export const rootEpic = combineEpics(
    fetchWallsEpic,
);

export const rootReducer = combineReducers({
    wallStore,
    emotionsStore,
    distortionStore,
    diariesStore
});