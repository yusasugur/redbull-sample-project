const dealerListReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.load];
        default:
            return state;
    }
};

export default dealerListReducer;
