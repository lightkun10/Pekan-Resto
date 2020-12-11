import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const resto = JSON.parse(message.data);
    // console.log(message.data);
    NotificationHelper.sendNotification({
      title: `${resto.name} is in the town! Go check it out!`,
      options: {
        body: resto.description,
        image: `${CONFIG.BASE_IMAGE_SMALL_URL}${resto.pictureId}`,
      },
    });
  },
};

export default WebSocketInitiator;
