const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Egi';
    var text = 'Hello world!'
    var message = generateMessage(from, text);

    expect(message).toInclude({
      from,
      text
    });
    expect(message.createdAt).toBeA('number');
  });

});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Egarat';
    var latitude = '1337';
    var longitude = '7331';
    var locationMessage = generateLocationMessage(from, latitude, longitude);

    expect(locationMessage).toInclude({
      from,
      url: `https://www.google.com/maps?q=${latitude},${longitude}`
    });
    expect(locationMessage.createdAt).toBeA('number');
  });
});