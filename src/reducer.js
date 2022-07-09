import { SET_LOADING } from "./actions";

const reducer = (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return { ...state, isLoading: true };
		default:
			throw new Error(`No matching "${action.type}" action type!`);
	}
};

export default reducer;
