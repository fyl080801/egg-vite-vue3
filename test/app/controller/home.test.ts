import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/home.test.ts', () => {
  it('should GET /api', async () => {
    const result = await app.httpRequest().get('/api').expect(200);
    assert(result.text === 'api');
  });
});
