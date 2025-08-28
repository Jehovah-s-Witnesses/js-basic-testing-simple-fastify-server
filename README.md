# js-basic-testing-simple-fastify-server

## Access to mongo db

1. Should have installed [docker desktop](https://www.docker.com/products/docker-desktop/)
2. Need to check in terminal the next command(If you try after install, relaunch terminal)
```bash
docker-compose
```
or
```bash
docker compose
```
3. If command works, run ```docker-compose up``` or ```docker compose up```
4. After that you can use mongo db with next credentials

Host - localhost

Port - 27019

Username - root

Password - example

Or just use this connection string
```mongodb://root:example@localhost:27019/```

For stopping container with mongo you can use ```CTRL + C``` in an active terminal window where you run command above

Or just click on the stop button in the GUI interface of docker desktop

## Need to write tests for fastify application

### Note: Fastify has possibility for testing endpoints without true http requests. For this root instance of fastify has async `inject` method. For example, in this codebase we have root instance of fastify with exported variable `server`. And you can import it to test file and call `inject`. Be carefully, you can do `async` function in tests only for `it`, or `test` methods. `describe` you can create as `async`

```javascript
import server from './server';
import { describe, test, it, expect } from 'vitest';

describe('simple test of fastify server', () => {
  descibe('check creating user', () => {
    it('should return correct value', async () => {
      const response = await server.inject({
        method: 'POST',
        url: '/api/v1/user',
        body: { username: '', password: '12' },
      });

      expect(response.status).toBe(400);
      expect(JSON.parse(response.body)).toStrictEqual({ message: 'Some error text' });
    });
  });
});
```

### Inject response returns object with properties as `body`, `headers`, `status` etc. If your server returns json, you need parse it in tests.

### Please check validations and all variants of responses in this logic.

### Cases

#### Check all validations and 400 codes with messages
#### Check pagination
#### Check pagination with search
