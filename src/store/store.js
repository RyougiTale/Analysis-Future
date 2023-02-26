import { createStore } from 'redux';

const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ACTION_TYPE_1':
            // 处理ACTION_TYPE_1的逻辑
            return { ...state, /* 新状态 */ };
        case 'ACTION_TYPE_2':
            // 处理ACTION_TYPE_2的逻辑
            return { ...state, /* 新状态 */ };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;