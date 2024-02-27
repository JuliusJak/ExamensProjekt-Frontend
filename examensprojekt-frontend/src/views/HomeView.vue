<template>
  <div>
    <h1>Welcome to Your Home Page</h1>

    <nav>
      <router-link to="/signin" class="button">Sign in</router-link>
      <router-link to="/signup" class="button">Sign up</router-link>
      <router-link to="/guest" class="button">Continue as guest</router-link>
    </nav>

  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button {
  width: 130px;
  margin: 1px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: large;
  border-radius: 4px;
  background-color: #3498db;
  color: #fff;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #217dbb;
}
</style>
