import initialState from './InitialState';

let newState;
//aaa,fpoejfewpojfpwefjkwpfj
//fwejfowfjopwefpoek
//grepkgpogkprekgrgkergkrpgegke[rk[kg[pgrkgep[]]]]
export default (state = initialState, action ) => {
    switch(action.type) {
    case 'CHANGE_LIKES':
        newState = [...state.filter(item => item.id !== action.id)];
        newState.splice(
            state.findIndex(i => i.id === action.id), 
            0, 
            Object.assign({}, ...state.filter(item => item.id === action.id), 
                { 
                    likes: state.filter(item => item.id === action.id)[0].likes + 1
                }));
        return newState;
    default: 
        return state;
    }
};
