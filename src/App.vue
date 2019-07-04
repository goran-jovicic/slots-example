<template>
  <div id="app">
    <ToDoList>
      <template slot="title">
        <h1>Title</h1>
      </template>
      <p>I am the text from the parent component</p>
      <template slot="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Morbi cursus consectetur quam, id mollis tortor cursus et. Sed lobortis ullamcorper nunc et rutrum.
          Quisque ac lectus in eros consectetur luctus. Sed elementum tortor at tincidunt auctor. Suspendisse potenti.
          Morbi scelerisque mattis tincidunt. Nulla neque sapien, posuere vel lacus sed, cursus consequat erat.
          Maecenas enim dui, condimentum in enim aliquam, lobortis malesuada mauris. Donec nec diam sit amet felis pharetra egestas.
          Donec suscipit orci eget rutrum vestibulum. Proin lectus risus, placerat vitae tempor sed, ultricies non enim.
        </p>
      </template>
    </ToDoList>
    <UsersList>
      <template slot-scope="slotProps">
        <span v-if="slotProps.user.isGoingToExit">{{ slotProps.user.name }} ide na exit</span>
      </template>
    </UsersList>
    <div>{{ (message , message1) | capitalize(message,message1) }}</div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ToDoList from "./components/ToDoList";
import UsersList from "./components/UsersList";

export default {
  components: {
    HelloWorld,
    ToDoList,
    UsersList
  },

  data() {
    return {
      message: "ovo je poruka",
      message1: "this je poruka 2"
    };
  },

  filters: {
    capitalize(value,value1) {
      if (!value && !value1) {
        return "";
      }
      value = value.toString();
      value1 = value1.toString();
      return value.charAt(0).toUpperCase() + value.slice(1) + ' ' + value1.charAt(0).toUpperCase() + value1.slice(1);
    },

    toLowerCase(value) {
      if (!value) {
        return "";
      }
      value = value.toString();
      return value.charAt(0).toLowerCase() + value.slice(1) ;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

div {
  color: red;
}
</style>
