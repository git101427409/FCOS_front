<template>
  <div id="app">
    <header>
      <section>
        <img id="logo" src="./assets/logo.svg" alt="logo">
        <h1>中區炸雞訂餐系統</h1>
      </section>
      
      <aside>
        <div class="menuicon" @click="handleMenuChange" :class="{change: toggleBar}">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </aside>
    </header>

    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{path: 'backstage'}">Backstage</router-link> |
      <router-link :to="{name: 'RestaurantList'}">RestaurantList</router-link> |
      <router-link :to="{path: 'menu'}">Menu</router-link> |
      <router-link :to="{name: 'Menu', params: {restaurant_id: '5fb0ac816c37c124f8e237c3'}}">Menu昌平</router-link>
    </nav>

    <router-view/>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header {
  background-image: linear-gradient(to bottom right, rgb(228, 52, 90), rgb(247, 120, 30), rgb(241, 201, 87) , rgb(245, 138, 15));
  border-bottom: solid 0.5em rgb(240,240,240);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
header > section {
  flex: 1 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
}
header > aside {
  padding: 5px;
}
#logo {
  max-width: 120px;
  padding: 0.5em 1em;
}
.menuicon {
  cursor: pointer;
}
.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: black;
  border-radius: 15px;
  margin: 6px 0;
  transition: 0.4s;
}
/* Rotate bar... */
.change .bar1 {
  transform: rotate(-45deg) translate(-9px, 6px) ;
}
.change .bar2 {
  opacity: 0;
}
.change .bar3 {
  transform: rotate(45deg) translate(-8px, -8px) ;
}

nav {
  padding: 1.5em;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: overline;
}
</style>
<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

ul, li {
  list-style-type: none;
}

ul.list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: space-around;

  border: 0.5em dotted rgb(10, 195, 41);
}
ul.list > li {
  border: 0.3em solid rgb(255, 175, 26);
  padding: 2em;
  margin: 1.5em;
}
</style>

<script>
export default {
  data() {
    return {
      toggleBar: false
    }
  },
  methods: {
    handleMenuChange() {
      this.toggleBar = !this.toggleBar
    }
  }
}
</script>