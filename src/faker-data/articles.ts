import { faker } from "@faker-js/faker/locale/vi";

export interface Article {
  id: string;
  title: string;
  summary: string;
  image: string;
}

export const createArticles = (total: number = 10): Article[] => {
  const count = Number.isFinite(total) ? Math.max(0, Math.floor(total)) : 0;

  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    title: faker.lorem.sentence({ min: 8, max: 20 }),
    summary: faker.lorem.paragraphs({ min: 3, max: 6 }),
    image: faker.image.url(),
  }));
};
