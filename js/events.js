/* global Vue: false, moment: false, markdownit: false, Autolinker: false */
const now = new Date();
const md = markdownit();
const calendarID = 'secularpitt@gmail.com';
const numOfResults = 10;
const API_KEY = 'AIzaSyBILdBYibAQSy_7LMncr40hmLOLgDj4XFI';

const calURL = 'https://www.googleapis.com/calendar/v3/calendars/'+ calendarID + '/events?maxResults=' + numOfResults + '&orderBy=startTime&singleEvents=true&timeMin=' + now.toISOString() + '&key=' + API_KEY;

var calendar = new Vue({
  el: '#calendar',
  data: {
    events: [],
  },
  methods: {
    getCalendarEvents() {
      fetch(calURL)
        .then(blob => blob.json())
        .then(data => this.events = data.items)
        .catch((response) => console.log('Error', response));
    },
    mdToHTML(markdown) {
      return Autolinker.link((markdown) ? md.render(markdown): '', {className: 'text-info'});
    }
  },
  mounted() {
    this.getCalendarEvents();
  },
  filters: {
    date(value) {
      const [date, format] = (value.date) ? [value.date, 'dddd, M/D']: [value.dateTime, 'dddd, M/D @ ha'];
      return moment(date).format(format);
    },
    id(value) {
      const date = (value.date) ? value.date: value.dateTime;
      return moment(date).format('MM-DD-YYYY');
    }
  }
});
