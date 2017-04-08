const expect = require('expect');

const {generateMessage} = require('./message');

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