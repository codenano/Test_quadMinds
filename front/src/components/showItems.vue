<template>
   <div>
      <main role="main" class="container">
         <div class="row">
            <form class="form-container col-lg-12">
               <h3 class="text-left">Add Item</h3>
               <div class="form-group col-lg-12">
                  <input type="text" class="form-control " v-model="title" placeholder="Title" name="">
               </div>
               <div class="form-group col-lg-12">
                  <input type="text" class="form-control" v-model="content" placeholder="Content" name="">
               </div>
               <div class="form-group col-lg-12">
                  <button type="button" class="btn btn-primary btn-block" v-if="saved" v-on:click="addItem">Save</button>
               </div>
               <div class="form-group col-lg-12" v-if="!saved">
                  <button type="button" class="btn btn-info  btn-block" v-on:click="updateItem">Update</button>
                  <button type="button" class="btn btn-warning btn-block" v-on:click="cancelItemUpdate">Cancel</button>
               </div>
            </form>
         </div>
         <div class="row">
            <h3 class="text-left">Item List</h3>
            <br>
            <table class="table">
               <thead>
                  <tr>
                     <th scope="col">#</th>
                     <th scope="col">Id</th>
                     <th scope="col">Title</th>
                     <th scope="col">Content</th>
                     <th scope="col">Action</th>
                  </tr>
               </thead>
               <tbody>
                  <tr v-for="(item, index) in items" :key="item.id">
                     <th>{{index+1}}</th>
                     <td>{{item.id}}</td>
                     <td>{{item.title}}</td>
                     <td>{{item.content}}</td>
                     <td>
                        <button type="button" class="btn btn-info" v-on:click="setupdateItemText(item)">Update</button>
                        <button type="button" class="btn btn-warning" v-on:click="deleteItem(item.id)">Remove</button>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </main>
   </div>
</template>

<script>

import { mapState } from 'vuex'


export default {
  
  data() {
      return {
          id: '',
          title: '',
          content: '',
          saved: true,
          updateded: false,
      }
  },

  methods: {

    addItem(){
      this.$store.commit('addItem', {'title':this.title, 'content':this.content} );
      this.cancelItemUpdate();
    },

    updateItem(item){
      this.$store.commit('updateItem', {'id':this.id, 'title':this.title, 'content':this.content} );
      this.cancelItemUpdate();
    },

    deleteItem(id)  {
      this.$store.commit("deleteItem", id);
    },

    setupdateItemText(item){
      this.id = item.id;
      this.title = item.title;
      this.content = item.content;
      this.saved = false;
    },

    cancelItemUpdate(){
      this.title = '';
      this.content = '';
      this.saved = true;
    },

  },

  mounted () {
    this.$store.commit('created')
  },

  computed: mapState([
    'items'
  ])
}

</script>