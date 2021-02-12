let app = new Vue({
  el: "#app",
  data: {
    count: 0,
  },
  methods: {
    plusButton: function() {
      this.count += 1
    },
    display: function() {
      this.display.textContent = this.count
    },
  },
})
