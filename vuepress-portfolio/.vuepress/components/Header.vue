<template>
  <header>
    <div class="container">
      <h1>{{ msg }}</h1>
      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/page-2/">Page 2</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      msg: "I'm the Header!",
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  border-bottom: 1px solid #ccc;
  color: #fff;
  padding: 15px;
  background: lighten(#000, 20%);
  overflow: hidden;

  h1 {
    margin: 0;
    width: 25%;
  }
}

h1,
nav {
  float: left;
}

nav {
  width: 75%;
}

nav ul {
  text-align: right;

  li {
    display: inline-block;
    margin-left: 1rem;

    a {
      font-size: 1.25rem;
    }
  }
}
</style>
