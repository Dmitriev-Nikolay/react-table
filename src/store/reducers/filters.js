const initialState = {
    filteredItems: [],
};

const filters = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH': 
            return {
                ...state,
                filteredItems: action.payload,
            };
        default: 
            return state;
    };
};

export default filters;