new Vue({
  el: "#app",
  data: {
    totalMoney: 0,
    inputMoney: 0,
  },
  methods: {
    plusMoney: function() {
      this.totalMoney += 100
      console.log(this.totalMoney)
    },
    buyCoke: function() {
      if (this.totalMoney > 120) {
        this.totalMoney -= 120
      }
    },
  },
})
