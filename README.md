meteor-onesignal
================
Easily send push notifications via OneSignal REST API.

# Installing

```
$ meteor add astrocoders:one-signal
```

## Getting started

Make sure to enter the following information from settings.json by default.
You can also give `apiId` and `apiKey` values as options.

```json
{
  "oneSignal": {
    "apiKey": "YOUR_ONE_SIGNAL_API_KEY",    
    "appId": "YOUR_APP_ID"
  },  
}
```

## Basic API

### OneSignal.Notifications.create
Usage:

```js
  const data = {
    contents: {
      en: 'Hey! Wazup? We miss you.',  
    },
  };

  const options = {
    apiKey:'',
    appId:'',
  }

  const oneSignal = new OneSignal() // By default it looks at Meteor.settings.oneSignal.
  const oneSignal = new OneSignal(options)

  oneSignal.notifications.create([playersId], data);
  // => returns OneSignal response.
```

Every created notification is saved into SentNotifications collection.

### That's it for now, more coming.
### Sent us a PR if you'd like to complete this API!
