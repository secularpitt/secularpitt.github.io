/* global Vue: false */
var navbar = new Vue({
  el: '#navbar',
  data: {
    page: '',
    collapsed: true,
  },
  computed: {
    collapse() {
      return this.collapsed ? 'collapse' : '';
    }
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
