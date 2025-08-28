import { initializeServer } from './initializers/initializeServer.js';
import { Type } from '@sinclair/typebox';
import { randomUUID } from 'node:crypto';
import { faker } from '@faker-js/faker';

export const server = await initializeServer();

const storage = [
  {
    id: '6a8e6b2c-3cf2-45c4-8d52-8c3844eec5f8',
    title: 'Chicken',
    description:
      'Introducing the Virgin Islands, U.S.-inspired Chips, blending multicolored style with local craftsmanship',
  },
  {
    id: '71c7f629-738c-45a1-81cd-a988dfcd7ba5',
    title: 'Shoes',
    description:
      'Professional-grade Gloves perfect for specific training and recreational use',
  },
  {
    id: '0f144230-3e74-4709-b880-f2f58fe23d9d',
    title: 'Chicken',
    description:
      'Professional-grade Shirt perfect for miserly training and recreational use',
  },
  {
    id: 'e5c8498d-95fa-4f25-a97c-c41cf40fc9cf',
    title: 'Fish',
    description:
      'Professional-grade Soap perfect for substantial training and recreational use',
  },
  {
    id: '8496e080-1641-4ce7-bdc5-8dff7a8725f5',
    title: 'Shirt',
    description:
      'Experience the orchid brilliance of our Pizza, perfect for white environments',
  },
  {
    id: '52dbdd87-3649-4de2-9bd7-10774bab9bad',
    title: 'Soap',
    description:
      'Our frog-friendly Hat ensures productive comfort for your pets',
  },
  {
    id: '5a86464b-f58e-4f0e-b195-3e181485447b',
    title: 'Hat',
    description:
      'Professional-grade Gloves perfect for nifty training and recreational use',
  },
  {
    id: '367841d7-5596-408e-a6c4-bdc0952058eb',
    title: 'Fish',
    description:
      'Our snake-friendly Shoes ensures strict comfort for your pets',
  },
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
    id: '737502dd-b7dc-435d-8f9e-11131e11949a',
    title: 'Soap',
    description:
      'Savor the savory essence in our Computer, designed for idealistic culinary adventures',
  },
  {
    id: '5c78c4e6-2310-4594-8195-bd8a2f5c665b',
    title: 'Mouse',
    description:
      'Our elephant-friendly Towels ensures forsaken comfort for your pets',
  },
  {
    id: 'f3447cd4-a3ab-4a86-a3cc-8dab5bf06547',
    title: 'Car',
    description:
      'The sleek and glass Shoes comes with orchid LED lighting for smart functionality',
  },
  {
    id: '4c7acdd4-bb18-4a8c-b286-b818315dd8ca',
    title: 'Cheese',
    description:
      'The sleek and discrete Soap comes with lime LED lighting for smart functionality',
  },
  {
    id: 'a6b184e4-c325-41ac-b25b-1c9f885f11ec',
    title: 'Towels',
    description:
      'The grey Cheese combines Iceland aesthetics with Yttrium-based durability',
  },
  {
    id: 'd9f78288-665f-490a-ae2c-a93887256cf9',
    title: 'Shoes',
    description:
      'Our gecko-friendly Pizza ensures spirited comfort for your pets',
  },
  {
    id: '25811d7b-f045-47be-9bef-372e27143ed1',
    title: 'Gloves',
    description: 'Handmade Pants designed with Cotton for beloved performance',
  },
  {
    id: '61ed126c-bd81-41c5-870b-06caee7f6f02',
    title: 'Mouse',
    description:
      'Incredible Chair designed with Ceramic for menacing performance',
  },
  {
    id: '3d61fd1c-50d8-468c-a2a2-61cd9df4ecd3',
    title: 'Bacon',
    description:
      'The white Shirt combines Sri Lanka aesthetics with Antimony-based durability',
  },
  {
    id: '79f6d46e-435c-4e2d-885c-a8fc81df2ebb',
    title: 'Hat',
    description:
      'The sleek and legal Chips comes with fuchsia LED lighting for smart functionality',
  },
  {
    id: 'aa5e28e5-1a63-4379-b6d8-e9121b97728d',
    title: 'Towels',
    description:
      "Macejkovic - Huels's most advanced Chips technology increases important capabilities",
  },
  {
    id: '9bcee7ab-2947-4452-844a-0fdc935a40de',
    title: 'Computer',
    description:
      'Our bear-friendly Ball ensures sniveling comfort for your pets',
  },
  {
    id: '26d2f1e1-422a-475b-8223-42f1d2efd410',
    title: 'Chair',
    description:
      'Featuring Erbium-enhanced technology, our Computer offers unparalleled grown performance',
  },
  {
    id: '1927b22d-1f1e-40bc-963a-e6ca82e1a21c',
    title: 'Shoes',
    description:
      'Featuring Vanadium-enhanced technology, our Sausages offers unparalleled foolish performance',
  },
  {
    id: '04e67583-2678-4bd9-8ab1-d1faf1bf8667',
    title: 'Pizza',
    description:
      'Savor the spicy essence in our Towels, designed for putrid culinary adventures',
  },
  {
    id: '8f32be86-69b9-4dc0-8e84-99c605c72475',
    title: 'Tuna',
    description:
      'Our juicy-inspired Computer brings a taste of luxury to your ordinary lifestyle',
  },
  {
    id: '4e61b923-061c-47f6-be73-27076c1a0ff2',
    title: 'Car',
    description:
      'Our sea lion-friendly Mouse ensures dark comfort for your pets',
  },
  {
    id: '4aebac6a-dc07-49ca-93ad-595f861a1136',
    title: 'Fish',
    description:
      'Discover the ecstatic new Keyboard with an exciting mix of Bamboo ingredients',
  },
  {
    id: '66ea86a6-5802-4d00-a115-2f08de33a09f',
    title: 'Hat',
    description:
      'Savor the creamy essence in our Chicken, designed for scaly culinary adventures',
  },
  {
    id: '25758fea-6d54-42fa-9729-129975cb8911',
    title: 'Bike',
    description:
      'Discover the deer-like agility of our Fish, perfect for shadowy users',
  },
];

server.register(
  (instance, opts, done) => {
    instance.get(
      '/notes',
      {
        schema: {
          tags: ['Notes'],
          querystring: Type.Object({
            offset: Type.Number({ minimum: 0 }),
            limit: Type.Number({ minimum: 1, maximum: 8 }),
            searchQuery: Type.Optional(
              Type.String({ minLength: 3, maxLength: 30 }),
            ),
          }),
        },
      },
      (request, reply) => {
        const { offset, limit, searchQuery } = request.query;

        const response = storage
          .filter(({ title }) => {
            if (searchQuery) {
              console.log(
                title,
                searchQuery,
                title.toLowerCase().includes(searchQuery.toLowerCase()),
              );
              return title.toLowerCase().includes(searchQuery.toLowerCase());
            }

            return true;
          })
          .filter((_, index) => {
            return index >= offset && index < offset + limit;
          });

        return response;
      },
    );

    done();
  },
  {
    prefix: '/api/v1',
  },
);
