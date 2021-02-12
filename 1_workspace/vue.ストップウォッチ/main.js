let app = new Vue({
  el: "#app",
  data: {
    count: 0,
    id: "stop",
  },
  methods: {
    countUp: function() {
      if ((this.id = "stop")) {
        setInterval((this.count += 1), 10)
        this.id = "start"
        console.log(this.id)
      } else if ((this.id = "start")) {
        clearInterval(this.count)
      }
    },
  },
})
