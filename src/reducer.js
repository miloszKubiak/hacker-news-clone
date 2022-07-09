import { SET_LOADING, SET_STORIES } from "./actions";

const reducer = (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return { ...state, isLoading: true };
		case SET_STORIES:
			return {
				...state,
				isLoading: false,
				hits: action.payload.hits,
				nbPages: action.payload.nbPages,
			};
		default:
			throw new Error(`No matching "${action.type}" action type!`);
	}
};

export default reducer;
