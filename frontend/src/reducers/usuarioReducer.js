import { GET_USER } from '../actions/actionTypes/usuarioActionTypes';


const initialState = [];

function usuarioReducer(usuario = initialState, action) {
	const { type, payload } = action;

	console.log("Chegou aqui  no reducer usuario ??? " + type + payload);

  	switch (type) {
    	// case CREATE_DASHBOARD:
      	// 	return [...dashboard, payload];

    	// case RETRIEVE_DASHBOARD:
      	// 	return payload;

		case GET_USER:
			console.log("payload");
			console.table(payload);
			return payload;

		default:
			return usuario;
	}
};

export default usuarioReducer;