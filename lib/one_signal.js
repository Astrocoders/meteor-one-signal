OneSignal = {
  _base: 'https://onesignal.com/api/v1/',
  send(api, method, data){
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
