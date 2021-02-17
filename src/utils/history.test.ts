import createdHistory from './history';

describe('history', () => {
  it('should be a valid browser history', () => {
    expect(createdHistory).toHaveProperty('goBack');
  });
});
