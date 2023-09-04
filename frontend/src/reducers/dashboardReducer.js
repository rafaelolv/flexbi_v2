import { RETRIEVE_DASHBOARD, GET_DADOS_DASHBOARD, CREATE_DASHBOARD, GET_INFOS_DASHBOARD, CREATE_INFOS_DASHBOARD } from '../actions/actionTypes/dashboardActionTypes';


const testeDadosDashboard = {
	categoria: "Category",
	data: "Order Date",
	id_dados_dashboard: 1,
	id_usuario: 1,
	produto: "Product Name",
	valor: "Sales"
}

const initialState = testeDadosDashboard;

function dashboardReducer(dashboard = initialState, action) {
	const { type, payload } = action;

	console.log("Chegou aqui  no reducer ??? " + type + payload);

  	switch (type) {
    	case CREATE_DASHBOARD:
      		return [...dashboard, payload];

    	case RETRIEVE_DASHBOARD:
      		return payload;

		case GET_INFOS_DASHBOARD:
			return payload;

		case GET_DADOS_DASHBOARD:
			console.log("payload");
			console.log(payload);
			console.table(payload);
			return payload;


		// case UPDATE_TUTORIAL:
		//   return tutorials.map((tutorial) => {
		//     if (tutorial.id === payload.id) {
		//       return {
		//         ...tutorial,
		//         ...payload,
		//       };
		//     } else {
		//       return tutorial;
		//     }
		//   });

		// case DELETE_TUTORIAL:
		//   return tutorials.filter(({ id }) => id !== payload.id);

		// case DELETE_ALL_TUTORIALS:
		//   return [];

		default:
			return dashboard;
	}
};

export default dashboardReducer;