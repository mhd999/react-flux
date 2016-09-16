import {get} from 'jquery';
import serverActions from './actions/serverActions';
// import {getItems} from '../api/itemService';

let api = {
    getItems() {
        // let result = getItems();
        console.log("1st Flux step api call ");
        get('http://localhost:9000').done(res => {
            serverActions.reciveItems(res);
        })
    },
    getWeather() {
        get('http://api.yr.no/weatherapi/locationforecast/1.9/') 
            .done(res => {
                console.log(res);
            })
    }
}

export default api;