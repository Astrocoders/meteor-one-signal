meteor-onesignal
================
Easily send push notifications via OneSignal REST API.

# Installing

```
$ meteor add astrocoders:one-signal
```

## Getting started

Ensure that you have a oneSignal entry in your settings.json:

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

```
  const data = {
    contents: {
      en: 'Hey! Wazup? We miss you.',  
    },
  };

  OneSignal.Notifications.create([playersId], data);
  // => returns OneSignal response.
```

Every created notification is saved into SentNotifications collection.

### That's it for now, more coming.
### Sent us a PR if you'd like to complete this API!
