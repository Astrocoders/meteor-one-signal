SentNotifications = new Mongo.Collection('oneSignalNotifications');

OneSignal = {
  _base: 'https://onesignal.com/api/v1/',
  send(method, api, data){
    const url = `${this._base}/${api}`;
    const { apiKey } = Meteor.settings.oneSignal;

    return HTTP.call(method, url, {
      data,
      headers: {
        Authorization: `Basic ${apiKey}`,
      },
    });
  },
};

OneSignal.Notifications = {
  _api: 'notifications',
  create(players, data){
    const url = `${this._api}`;
    const { appId } = Meteor.settings.oneSignal;

    SentNotifications.insert({
      ...data,
      createdAt: new Date(),
    });

    return OneSignal.send('POST', url, {
      ...data,
      app_id: appId,
      include_player_ids: players,
    });
  },
};
