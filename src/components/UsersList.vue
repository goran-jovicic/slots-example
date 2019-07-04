<template>
  <div>
    <div v-for="(user,index) in users" :key="index">
      <slot :user="user">{{ user.name }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { name: "Misa", isGoingToExit: false },
        { name: "Vojin", isGoingToExit: false },
        { name: "Jelena", isGoingToExit: true },
        { name: "Savic", isGoingToExit: false },
        { name: "Boris", isGoingToExit: false },
        { name: "Nenad", isGoingToExit: false },
        { name: "Andrija", isGoingToExit: false },
        { name: "Milos", isGoingToExit: true },
        { name: "Branko", isGoingToExit: false },
        { name: "Dragana", isGoingToExit: false },
        { name: "Goran", isGoingToExit: false },
        { name: "Vuk", isGoingToExit: false },
        { name: "Vanja", isGoingToExit: true }
      ]
    };
  }
};
</script>

<style>
</style>
