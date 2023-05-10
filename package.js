Package.describe({
  name: 'astrocoders:one-signal',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Simple OneSignal integration for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Astrocoders/meteor-one-signal',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'ecmascript',
    'http',
    'mongo',
  ]);

  api.addFiles([
    'lib/one_signal.js',
  ], 'server');

  api.export(['OneSignal', 'SentNotifications'], 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('astrocoders:one-signal');
});
