import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.MIXPANEL_TOKEN, {
  debug: true,
  track_pageview: true,
  loaded: function(mixpanel) {
    mixpanel.track('Pageview');
  }
});

export default mixpanel;

