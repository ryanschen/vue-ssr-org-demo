<template>
  <div id="app">
    <div class="bl-wrapper">
      <bl-header></bl-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import BlHeader from './components/BlHeader.vue'

export default {
  name: 'app',
  components: {
    BlHeader
  },
  data () {
    return {
    }
  }
}
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
  text-decoration-line: none;
  color: #444;
  background-color: transparent;
}
:focus {
  outline: -webkit-focus-ring-color auto 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.bl-wrapper{
  max-width: 800px;
  margin: 0 auto;
  padding: 0 60px;
}
</style>
