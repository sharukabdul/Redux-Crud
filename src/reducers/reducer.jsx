export default function reducer(state= {}, action) {
    switch(action.type) {
        case 'ADD_TODO': {
            if(state.userDetails.length >= 1) {
                const arrLength = state.userDetails.length;
                const lastId = state.userDetails[arrLength - 1]['id']
                return {...state, userDetails: [...state.userDetails, {...action.payload, id: Number(lastId) + 1}]}
            } else {
                return {...state, userDetails: [...state.userDetails, {...action.payload, id: 1}]}
            }
        }
        case 'DELETE_TODO': {
            const index = action.payload
            return {...state, userDetails: [...state.userDetails.slice(0, index), ...state.userDetails.slice(index + 1)]}
        }
        case 'EDIT_TODO': {
            const { data } = action.payload
            const newData = state.userDetails.map(item => {
                if(item.id == data.id) {
                    return data;
                }
                return item;
            })
            return {...state, userDetails: newData};
        }
        default: {
            return state
        }
    }
}