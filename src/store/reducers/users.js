const initialState = {
    items: [],
    isLoaded: false,
    item: null,
    maxRowOnPage: 50,
    currentPage: 1,
    offset: 0,
    pageCount: null,
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                items: action.payload.slice(state.offset, state.offset + state.maxRowOnPage),
                isLoaded: true,
                pageCount: Math.ceil(action.payload.length / state.maxRowOnPage),
            };
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            };
        case 'VIEW_USER':
            if(!action.payload.description) {
                action.payload.description = '';
            };
            return {
                ...state,
                item: action.payload,
            };
        case 'ADD_NEW_USER':
            return {
                ...state, items: !([...state.items].find(el => el.id === action.payload.id))
                    ? [action.payload, ...state.items]
                    : [...state.items],
            };
        default:
            return state;
    };
};

export default users;