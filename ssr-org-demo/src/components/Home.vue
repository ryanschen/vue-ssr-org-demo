<template>
  <div>
    <ul>
      <li class="item">
        <h4 class="title">Hello World</h4>
        <p class="time">2017-10-09</p>
        <p class="detail">Welcome to Hexo! This is your very first post. Check documentation for more info. If you get any problems when using Hexo, you can find the answer in troubleshooting or you can ask me on GitHub.</p>
        <button class="btn">阅读全文>></button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',

  data () {
    return {
    }
  },

  methods: {}
}

</script>
<style lang="scss" scoped>
.item{
  padding: 25px 0 15px;
  .title{
    margin: 0;
    color: #555;
    text-align: left;
    font: bold 25px/1.1 "ff-tisa-web-pro", Cambria, "Times New Roman", Georgia, Times, sans-serif;
  }
  .time{
    padding: 0;
    margin: 15px 0 0;
    color: #6E7173;
    float: left;
    display: inline;
    text-indent: .15em;
  }
  .detail{
    margin: 0 0 1.234em;
    clear: left;
    font-size: 15px;
    line-height: 1.77;
    color: #444;
    padding-top: 15px;
    text-align: justify;
    text-justify: distribute;
    word-break: break-all;
  }
  .btn{
    font-size: 14px;
    color: #444;
    margin: -10px 0;
    padding: 5px 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    float: right;
    cursor: pointer;
    background-color: transparent;
  }
}
</style>
