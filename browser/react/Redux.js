const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE_ALBUMS_FROM_SERVER';


function reducer(prevState, action) {
	switch (action.type){
		case RECEIVE_ALBUMS_FROM_SERVER:
			return Object.assign({}, state, {albums: albums})
	}
}