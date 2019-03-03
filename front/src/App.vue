<template>
  <div id="app">
    <div>
      <show-item></show-item>
    </div>
  </div>
</template>

<script>

  import showItem from './components/showItems';

  export default {
      name: 'app',
      components: {
        showItem
      },
  }

</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn {
  margin: 0 0.1em;
}

.input-group {
  margin: 1em 0;
}

.form-container {
  padding: 0!important;
  margin: 0 0 2.5em 0!important;
}

.form-group {
  padding: 0!important;
}

</style>
