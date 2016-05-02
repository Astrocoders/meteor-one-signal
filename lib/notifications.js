SentNotifications = new Mongo.Collection('oneSignalNotifications');
OneSignal.Notifications = {
  _api: 'notifications',
  create(data){
    const url = `${this._api}/create`;
    const { appId } = Meteor.settings.oneSignal;

    SentNotifications.insert({
      ...data,
      createdAt: new Date(),
    });

    return OneSignal.send('POST', url, {
      ...data,
      appId,
    });
  },
};
