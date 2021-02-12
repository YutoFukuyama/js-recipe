let app = new Vue({
  el: "#app",
  data: {
    count: 0,
  },
  methods: {
    countUp: function() {
      this.count += 1
    },
    display: function() {
      this.display.textContent = this.count / 100
    },
    count: function() {
      this.setInterval(this.countUp, 10)
      this.clearInterval
    },
  },
})
