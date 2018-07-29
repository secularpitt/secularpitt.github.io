/* global Vue: false */
var navbar = new Vue({
  el: '#navbar',
  data: {
    collapsed: true,
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    }
  }
});
