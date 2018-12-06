
export default function emotionsStore(state = {
    phase: 'INIT',
    emotions: [{
        id: 0,
        name: 'Angry'
    }, {
        id: 1,
        name: 'Anxious'
    }, {
        id: 2,
        name: 'Ashamed'
    }, {
        id: 3,
        name: 'Disgusted'
    }, {
        id: 4,
        name: 'Empty'
    }],
    error: null
}, action) {
    switch (action.type) {
        case 'GET':
			return {
				...state
			};
       default:
			return state;
    }
}
