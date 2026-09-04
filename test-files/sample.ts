interface TestUser {
  id: number;
  name: string;
  active: boolean;
}

const users: TestUser[] = [
  { id: 1, name: "Anand", active: true },
  { id: 2, name: "QA Tester", active: false },
];

const activeUsers = users.filter((user: TestUser): boolean => user.active);
console.log(activeUsers);
