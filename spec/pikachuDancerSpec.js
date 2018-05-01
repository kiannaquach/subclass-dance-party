describe('PikachuDancer', function() {

  var pikachuDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pikachuDancer = new PikachuDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(pikachuDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node bounce', function() {
    sinon.spy(pikachuDancer.$node, 'toggle');
    pikachuDancer.step();
    expect(pikachuDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(pikachuDancer, 'step');
      expect(pikachuDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(pikachuDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(pikachuDancer.step.callCount).to.be.equal(2);
    });
  });
});
