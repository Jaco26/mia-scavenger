<template>
  <div id="navbar-div">
    <h2>Minneapolis Institute of Arts</h2>

    <div id="hamburger-icon" @click="showMenu = ! showMenu">
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
    </div>

    <ul v-if="showMenu" class="navbar">
        <li><a href="#">Plan A Trip</a></li>
        <li><a href="#">Previous Trips</a></li>
        <li><a href="#">Pre-Curated Trips</a></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
        showMenu: false,
    };
  },
  methods: {
      toggleMenu: function() {
          this.showMenu=!this.showMenu;
          console.log(this.showMenu);
      }
  }
};
</script>

<style scoped>
#navbar-div{
    position: relative;
}

#navbar-div:after {
  display: block;
  height: 2px;
  content: " ";
  width: 75%;
  background-color: rgba(35, 31, 32, 0.85);
  margin: 30px auto 55px;
}

ul {
  text-align: right;
}

li {
  list-style-type: none;
  font-size: 1.3em;
  margin: 15px auto;
  border-bottom:1px solid rgba(35, 31, 32, 0.85);
  padding:5px;
  width: 70%;
}

a {
  text-decoration: none;
  color: rgba(35, 31, 32, 0.85);
}
#hamburger-icon {
    position: absolute;
    top: 0;
    right: 15%;
}
#hamburger-icon:hover {
    cursor: pointer;
}
.hamburger-line {
    width: 30px;
    height: 2px;
    background-color: black;
    margin: 8px 0;
}

@media (max-width: 660px) {
    #hamburger-icon {
        position: static;
        display: inline-block;
        margin: 0 auto;
    }
}

</style>
