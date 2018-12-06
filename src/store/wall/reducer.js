
initialState = {
    phase: 'INIT',
    walls: [],
    error: null
}

function wallStore (state=initialState, action){
    switch (action.type) {
        case 'PING':
        return state;
        case 'PONG':
        return state;
        default:
          return state;
      }
}

export default wallStore;
