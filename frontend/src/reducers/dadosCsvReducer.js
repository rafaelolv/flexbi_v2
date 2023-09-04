import { GET_DADOSCSV, CREATE_DADOSCSV } from '../actions/actionTypes/dadosCsvActionTypes';


const initialState = {};

function dadosCsvReducer(dadosCsv = initialState, action) {
	const { type, payload } = action;

	// dadosCsv = payload;

	console.log("---- Chegou aqui  no reducer CSV dadosCsvReducer ??? ");
	console.log(type);
	console.log(payload);

	console.log("dadosCsv");
	console.log(dadosCsv);

  	switch (type) {
    	case CREATE_DADOSCSV:
      		return [...dadosCsv, payload];

    	case GET_DADOSCSV:
      		return payload;

		default:
			return dadosCsv;
	}
};

export default dadosCsvReducer;