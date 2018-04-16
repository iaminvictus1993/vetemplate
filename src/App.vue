<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'app',
    created() {
        document.body.className = localStorage.getItem('theme')
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
* {
    margin: 0;
    padding: 0;
}
a {
    text-decoration: none;
}
body {
    min-height: 100vh;
    min-width: 1366px;
    overflow-x: hidden;
}
</style>
