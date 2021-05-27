const initialState = {
    filteredItems: [],
};

const filters = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER': 
            return {
                ...state,
                filteredItems: action.payload,
            };
        default: 
            return state;
    };
};

export default filters;