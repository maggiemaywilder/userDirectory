/* eslint-disable import/no-anonymous-default-export */
// do I import anything?
import axios from 'axios';

export default {
    getEmployees: function(){
        return axios.get('https://randomuser.me/api/?results=5');
    }
};