import { faker } from "@faker-js/faker/locale/vi";

export interface Conversation {
  id: string;
  user: {
    avatar: string;
    fullname: string;
  };
  lastMessage: {
    id: string;
    type: string;
    message: string;
    created: Date;
  };
}

export const createConversations = (
  total: number = 10,
): Conversation[] => {
  const count = Number.isFinite(total) ? Math.max(0, Math.floor(total)) : 0;

  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    user: {
      avatar: faker.image.avatar(),
      fullname: faker.person.fullName(),
    },
    lastMessage: {
      id: faker.string.uuid(),
      type: "text",
      message: faker.lorem.sentence(),
      created: faker.date.recent(),
    },
  }));
};
