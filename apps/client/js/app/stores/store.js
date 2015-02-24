class Store {
	constructor() {
		this.connected = false;

		super();
	}

	isConnected() {
		console.log('is connected?')
		console.log(this)
		return this.connected;
	}


}

export default Store;