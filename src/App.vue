<template>
  <div id="app">
    <ToDoList>
      <template slot="title">
        <h1>Title</h1>
      </template>
      <p> I am the text from the parent component</p>
      <template slot="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Morbi cursus consectetur quam, id mollis tortor cursus et. Sed lobortis ullamcorper nunc et rutrum. 
        Quisque ac lectus in eros consectetur luctus. Sed elementum tortor at tincidunt auctor. Suspendisse potenti. 
        Morbi scelerisque mattis tincidunt. Nulla neque sapien, posuere vel lacus sed, cursus consequat erat. 
        Maecenas enim dui, condimentum in enim aliquam, lobortis malesuada mauris. Donec nec diam sit amet felis pharetra egestas. 
        Donec suscipit orci eget rutrum vestibulum. Proin lectus risus, placerat vitae tempor sed, ultricies non enim.</p>
      </template>
    </ToDoList>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ToDoList from './components/ToDoList'

export default {
  components: {
    HelloWorld,
    ToDoList
  }
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
</style>
