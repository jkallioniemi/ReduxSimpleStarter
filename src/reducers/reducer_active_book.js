// State ragument is nt application state, only the state that
// this reducer is responsibel for
export default function(state = null, action) {
    switch (action.type) {
    case 'BOOK_SELECTED':
        return action.payload;
    }

    return state;
}