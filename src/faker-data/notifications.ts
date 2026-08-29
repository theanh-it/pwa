import { faker } from "@faker-js/faker/locale/vi";

export interface Notification {
  id: string;
  user: {
    avatar: string;
    fullname: string;
  };
  message: string;
  created: Date;
}

export const createNotifications = (total: number): Notification[] => {
  const count = Number.isFinite(total) ? Math.max(0, Math.floor(total)) : 0;

  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    user: {
      avatar: faker.image.avatar(),
      fullname: faker.person.fullName(),
    },
    message: faker.lorem.sentence(),
    created: faker.date.recent(),
  }));
};
