/* global Vue: false, moment: false, markdownit: false, Autolinker: false */
const now = new Date();
const md = markdownit({html: true});
const calendarID = 'secularpitt@gmail.com';
const numOfResults = 10;
const API_KEY = 'AIzaSyBILdBYibAQSy_7LMncr40hmLOLgDj4XFI';

const calURL = 'https://www.googleapis.com/calendar/v3/calendars/'+ calendarID + '/events?maxResults=' + numOfResults + '&orderBy=startTime&singleEvents=true&timeMin=' + now.toISOString() + '&key=' + API_KEY;

var calendar = new Vue({
  el: '#calendar',
  data: {
    events: [],
    status: 'Loading events...'
  },
  methods: {
    getCalendarEvents() {
      fetch(calURL)
        .then(blob => blob.json())
        .then(data => this.events = data.items)
        .then(() => this.status = (this.events.length === 0) ? 'No events were found' : '')
        .then(() => this.highlightToday())
        .catch(() => this.status = 'Oops... Looks like there was a problem loading the events.');
    },
    mdToHTML(markdown) {
      return Autolinker.link((markdown) ? md.render(markdown): '', {className: 'text-info'});
    },
    highlightToday() {
      const idForToday = this.$options.filters.id(now);
      const eventTitles = document.getElementsByClassName('js-event-title');
      for(const title of eventTitles) {
        if(title.dataset.eventDate === idForToday) { title.classList.add('text-info'); }
        else { break; } // events for today will only ever be at the beginning
      }
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
