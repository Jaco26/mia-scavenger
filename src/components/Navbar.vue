<template>
  <div id="navbar-div">
    <h2>Minneapolis Institute of Arts</h2>

    <div id="hamburger-icon" @click="showMenu = ! showMenu">
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
    </div>

    <ul v-if="showMenu" class="navbar">
        <li><a href="#">Is A</a></li>
        <li><a href="#">Test</a></li>
        <li><a href="#">This</a></li>
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
  width: 70%;
  background-color: rgba(35, 31, 32, 0.85);
  margin: 30px auto 75px;
}
ul {
  text-align: center;
}
li {
  display: inline-block;
  font-size: 1.3em;
  margin: 0 30px;
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
    height: 3px;
    background-color: black;
    margin: 8px 0;
}

</style>
