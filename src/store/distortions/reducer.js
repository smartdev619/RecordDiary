
initialState = {
    phase: 'INIT',
    distortions: [{
        id: 0,
        name: 'All or nothing'
    }, {
        id: 1,
        name: 'Overgenerlization'
    }, {
        id: 2,
        name: 'Filtering out the positive'
    }, {
        id: 3,
        name: 'Jumping to conclusions'
    }, {
        id: 4,
        name: 'Mind Reading'
    },{
        id:5,
        name: 'Fortune-telling'
    }],
    error: null
}

function distortionStore(state = initialState) {
    return state;
}

export default distortionStore;
