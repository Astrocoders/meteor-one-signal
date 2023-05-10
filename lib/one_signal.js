SentNotifications = new Mongo.Collection('oneSignalNotifications')

OneSignal = class OneSignal {
  _baseUrl = 'https://onesignal.com/api/v1/'

  constructor(options = {}) {
    const { apiKey, appId } = Meteor.settings.oneSignal
    this.apiKey = options.apiKey || apiKey
    this.appId = options.appId || appId
  }

  send(method, api, data) {
    const url = `${this._baseUrl}${api}`

    return HTTP.call(method, url, {
      data,
      headers: {
        Authorization: `Basic ${this.apiKey}`,
      },
    })
  }

  notifications = {
    self: this,
    _api: 'notifications',

    create(players, data) {
      const url = `${this._api}`
      const appId = this.self.appId

      SentNotifications.insert({
        ...data,
        appId,
        createdAt: new Date(),
      })

      return this.self.send('POST', url, {
        ...data,
        app_id: appId,
        include_player_ids: players,
      })
    },
  }
}
