<template>
  <footer class="footer">
    <ul>
      <li v-for="lis in ul">{{lis.li}}</li>
    </ul>
    <p>
      Copyright&nbsp;&copy;&nbsp;{{author}} - 2016 All rights reserved
    </p>
  </footer>
</template>

<script>
  export default {
    name: 'footerDiv',
    data () {
      return {
        ul: [
          { li: '琉璃之金' },
          { li: '朦胧之森' },
          { li: '缥缈之滔' },
          { li: '逍遥之火' },
          { li: '璀璨之沙' }
        ]
      }
    },
    computed: {
      author () {
        return this.$store.state.author
      }
    }
  }
</script>
<style>
	.footer ul{
		list-style-type: none;
	}
	.footer ul li{
		display: inline-block;
		margin-right: 15px;
	}
</style>