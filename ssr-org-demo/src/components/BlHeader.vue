<template>
  <div class="bl-header">
    <div class="logo"><a href="#">RyanChenX'blog</a></div>
    <div class="menu">
      <router-link to="/" class="item current">首页</router-link>
      <router-link to="archives" class="item">归档</router-link>
      <router-link to="about" class="item">关于</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bl-header',

  data () {
    return {
    }
  },

  methods: {}
}

</script>
<style lang="scss" scoped>
.bl-header .menu .item{
  display: inline-block;
  padding: 3px 20px 3px;
  line-height: 30px;
  color: #444;
  font-size: 13px;
  border: 1px solid transparent;
  &.current{
  border: 1px solid #ddd;
  border-bottom-color: #fff;
  }
}
.bl-header{
  padding: 58px 0 0;
  text-align: left;
  border-bottom: 1px solid #ddd;
  position: relative;
}
.logo{
  margin-bottom: 40px;
  font: bold 38px/1.12 "Times New Roman", Georgia, Times, sans-serif;
}
.menu{
  margin: 10px 0 -1px;
  padding: 0;
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
