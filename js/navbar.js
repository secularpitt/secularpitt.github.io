/* global Vue: false */
var navbar = new Vue({
  el: '#navbar',
  data: {
    page: location.pathname.slice(1,-1),
    collapsed: true,
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    isCurrentPage(pageName) {
      return pageName === this.page;
    }
  }
});
