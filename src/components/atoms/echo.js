// TODO: refactor to autodetect prod mode

import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

const echo = new Echo({
  broadcaster: 'pusher',
  key: 'cf8bef66b150b0ac26f3',      // TODO: change key
  wsHost: window.location.hostname,
  wsPort: 6001,
  forceTLS: false,
  disableStats: true,
  channel: Pusher,
})

export { echo }
