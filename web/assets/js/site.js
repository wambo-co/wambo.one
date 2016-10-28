requirejs.config({
    baseUrl: '/assets/js',
    paths: {
        jquery: 'lib/jquery',
        bootstrap: 'lib/bootstrap'
    },
    shim: {
      'bootstrap': {
        deps: ['jquery']
      }
    }
});

requirejs(["jquery"], function($) {
  console.log("Are you wambo? Join us on:");
  console.log("GitHub", "https://github.com/wambo-co");
  console.log("Twitter", "https://twitter.com/wambo_co");
  console.log("Facebook", "https://www.facebook.com/wambo");
  console.log("Docker", "https://hub.docker.com/u/wambocorp/");
  console.log("Composer", "https://packagist.org/packages/wambo/");
  console.log("Slack", "https://wambo-co.slack.com");
});
