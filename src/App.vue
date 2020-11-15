<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
a {
  text-decoration: none;
}
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f4f4f2;
}
body {
  margin: 0;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1100px;
  }
}
.button {
  background-color: #555555;
  border: none;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}
</style>
