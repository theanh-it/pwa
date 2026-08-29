import { faker } from "@faker-js/faker/locale/vi";

export interface Conversation {
  id: string;
  user: {
    avatar: string;
    fullname: string;
  };
  badge: number;
  lastMessage: {
    id: string;
    type: string;
    message: string;
    created: Date;
  };
}

export const createConversations = (total: number = 10): Conversation[] => {
  const count = Number.isFinite(total) ? Math.max(0, Math.floor(total)) : 0;

  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    user: {
      avatar: faker.image.avatar(),
      fullname: faker.person.fullName(),
    },
    badge: faker.number.int({ min: 0, max: 100 }),
    lastMessage: {
      id: faker.string.uuid(),
      type: "text",
      message: faker.lorem.sentence(),
      created: faker.date.recent(),
    },
  }));
};

export interface Message {
  id: string;
  sender: {
    id: string;
    avatar: string;
    fullname: string;
  };
  type: string;
  content: string;
  info?: any;
  created: Date;
}

export const createMessages = (option: {
  members: string[];
  total: number;
}): Message[] => {
  const count = Number.isFinite(option.total)
    ? Math.max(0, Math.floor(option.total))
    : 0;
  const senders: Message["sender"][] = [...new Set(option.members)].map(
    (id) => ({
      id,
      avatar: faker.image.avatar(),
      fullname: faker.person.fullName(),
    }),
  );

  if (count === 0 || senders.length === 0) return [];

  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    sender: { ...faker.helpers.arrayElement(senders) },
    type: "text",
    content: faker.lorem.sentence(),
    created: faker.date.recent({ days: 30 }),
  })).sort(
    (first, second) => first.created.getTime() - second.created.getTime(),
  );
};

export const createConversation = () => {
  const recipientId = faker.string.uuid();
  const senderId = faker.string.uuid();

  return {
    id: faker.string.uuid(),
    sender: {
      id: senderId,
      avatar: faker.image.avatar(),
      fullname: faker.person.fullName(),
    },
    recipient: {
      id: recipientId,
      avatar: faker.image.avatar(),
      fullname: faker.person.fullName(),
    },
    messages: createMessages({ members: [senderId, recipientId], total: 100 }),
  };
};
