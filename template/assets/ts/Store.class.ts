import WatchJS from 'melanke-watchjs';

class Store {
	//need default values
	static items:object = {dark:false};
	constructor(){

	}
	static watchItems(callback: Function){
		if (process.browser){
			if (localStorage.storeItems){
				console.log(JSON.parse(localStorage.storeItems))
				Store.items = JSON.parse(localStorage.storeItems);
			}
		}
		WatchJS.watch(Store,"items",()=>{
			if (process.browser){
				localStorage.storeItems = JSON.stringify(Store.items);
			}
		})
		return WatchJS.watch(Store,"items",callback)
	}
}

export default Store;
