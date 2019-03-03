import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    
    state: {
        items: [],
        restUrl: 'http://localhost:3000/api/v2/notes'         
    },

    getters: {
        items: state => state.items
    },

    mutations: {

        change(state, items) {
            state.items = items;
        },

        created(){
            axios.get(this.state.restUrl)
            .then(r => r.data)
            .then(items => this.commit('change', items))
        },

        addItem(state,item){
            axios.post(this.state.restUrl, 
            {title: item.title,content:item.content})
            .then(response => response)
            .then(()=> this.commit('created'))
        },

        updateItem(state,item) {
            axios.put(this.state.restUrl+'/'+item.id, 
            {title: item.title,content: item.content})
            .then(response => response)
            .then(() => this.commit('created'))
        },

        deleteItem(state,id){
            axios.delete(this.state.restUrl+'/'+id)
            .then(response => response)
            .then(() => this.commit('created'))
        }

    },

});