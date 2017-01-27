const expect = require('chai').expect;
const Bncl  = require('../lib');

describe('parsing bncl', () => {
  let bnclString;

  beforeEach(() => {
    bnclString = "lets create a process with a startevent signed s1 with a endevent signed e1 with a sequenceflow comesfrom s1 goesto e1";
  });

  it('should parse the given bnclString correctly', () => {
    return Bncl.parseBncl(bnclString).then(res => {
      expect(res).to.not.be.undefined;
    })
  });
});
