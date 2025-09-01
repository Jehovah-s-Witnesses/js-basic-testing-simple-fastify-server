import { describe, it, expect } from 'vitest';
import { server } from './server.js';

describe('Basic test server', () => {
  it('should returns correct value', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/',
    });

    expect(response.statusCode).toStrictEqual(200);
    expect(response.body).toStrictEqual('hello');
  });
});

describe('simple test of fastify server', () => {
  describe('check getting notes', () => {
    it('should return collect value', async () => {
      const response = await server.inject({
        method: 'GET',
        url: '/api/v1/notes',
        query: { offset: 0, limit: 2, searchQuery: 'car' },
      });

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toStrictEqual([
        {
          id: 'f3447cd4-a3ab-4a86-a3cc-8dab5bf06547',
          title: 'Car',
          description:
            'The sleek and glass Shoes comes with orchid LED lighting for smart functionality',
        },
        {
          id: '4e61b923-061c-47f6-be73-27076c1a0ff2',
          title: 'Car',
          description:
            'Our sea lion-friendly Mouse ensures dark comfort for your pets',
        },
      ]);
    });
  });

  describe('check getting notes', () => {
    it('should return correct value', async () => {
      const response = await server.inject({
        method: 'GET',
        url: '/api/v1/notes',
        query: { offset: 0, limit: 8, searchQuery: 'ute' },
      });

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toStrictEqual([
        {
          id: 'e3be7191-b807-4bf5-aff8-1ab15ae76d97',
          title: 'Computer',
          description:
            "Zboncak, Schroeder and Crona's most advanced Chair technology increases victorious capabilities",
        },
        {
          id: '6d27f382-28c0-4b9d-9822-798db1529e10',
          title: 'Computer',
          description:
            'The turquoise Car combines Mauritania aesthetics with Oxygen-based durability',
        },
        {
          id: '9bcee7ab-2947-4452-844a-0fdc935a40de',
          title: 'Computer',
          description:
            'Our bear-friendly Ball ensures sniveling comfort for your pets',
        },
      ]);
    });
  });

  describe('check getting notes', () => {
    it('should return collect value', async () => {
      const response = await server.inject({
        method: 'GET',
        url: '/api/v1/notes',
        query: { offset: 0, limit: 1, searchQuery: 'blaBlaBla' },
      });

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toStrictEqual([]);
    });
  });

  describe('check getting notes', () => {
    it('should return collect value', async () => {
      const response = await server.inject({
        method: 'GET',
        url: '/api/v1/notes',
        query: { offset: 0, limit: 5, searchQuery: 'cHEEse' },
      });

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toStrictEqual([
        {
          id: '4c7acdd4-bb18-4a8c-b286-b818315dd8ca',
          title: 'Cheese',
          description:
            'The sleek and discrete Soap comes with lime LED lighting for smart functionality',
        },
      ]);
    });
  });

  describe('check getting notes', () => {
    it('should return collect value', async () => {
      const response = await server.inject({
        method: 'GET',
        url: '/api/v1/notes',
        query: { offset: 0, limit: 0, searchQuery: 'towels' },
      });

      expect(response.statusCode).toBe(400);
    });
  });
});
