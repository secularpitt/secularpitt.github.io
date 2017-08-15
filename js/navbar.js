/* global Vue: false */
var navbar = new Vue({
  el: '#navbar',
  data: {
    page: '',
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
