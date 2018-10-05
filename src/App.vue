<template>
  <div id="app">
    <h1>{{message}}</h1>
    <nav>
      <h2>Navigation</h2>
      <ul>
        <li><router-link to="/">Top</router-link></li>
        <li><router-link to="/page">Page</router-link></li>
      </ul>
    </nav>
    <section>
      <h2>Contents</h2>
      <div>
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Vue Project!'
      }
    }
  }
</script>

<style>
  h1 {
    color: red;
  }
</style>
