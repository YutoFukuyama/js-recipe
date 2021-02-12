new Vue({
  el: "#app",
  data: {
    number: "",
    result: "大吉",
    change: true,
  },
  methods: {
    luckCheck: function() {
      if ((this.change = true)) {
        this.number += Math.floor(Math.random() * 10) + 1
        console.log(this.number)
        this.change = false
        if (this.number >= 4) {
          this.result = "凶"
        } else if (this.number >= 2) {
          this.result = "中吉"
        } else if (this.number >= 1) {
          this.result = "大吉"
        }
      }
    },
    oneMore: function() {
      if ((this.change = true)) {
        this.number += Math.floor(Math.random() * 10) + 1
        console.log(this.number)
        this.change = false
        if (this.number >= 4) {
          this.result = "凶"
        } else if (this.number >= 2) {
          this.result = "中吉"
        } else if (this.number >= 1) {
          this.result = "大吉"
        }
      }
    },
  },
})
