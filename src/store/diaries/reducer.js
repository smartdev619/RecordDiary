
export default function diariesStore(state = {
    phase: 'INIT',
    diaries: [],
    error: null
}, action) {
    switch (action.type) {
        case 'SAVE_DIARY':
			return {
                ...state,
                diaries: action.payload
			};
       default:
			return state;
    }
}

/* Action */

export const saveDiary = (payload) => {
    console.log(payload)
    return ({
        type: 'SAVE_DIARY',
        payload
    })
}
