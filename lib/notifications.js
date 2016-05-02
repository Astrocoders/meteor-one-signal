SentNotifications = new Mongo.Collection('oneSignalNotifications');
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
