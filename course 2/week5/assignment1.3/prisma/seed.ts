import "dotenv/config";
import { PrismaClient } from "../src/generated/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        email: "test@admin.com",
        name: "Viktor Olausson",
      },
      {
        email: "anna.svensson@mail.com",
        name: "Anna Svensson",
      },
      {
        email: "erik.larsson@mail.com",
        name: "Erik Larsson",
      },
      {
        email: "lisa.nilsson@mail.com",
        name: "Lisa Nilsson",
      },
      {
        email: "john.doe@example.com",
        name: "John Doe",
      },
      {
        email: "maria.andersson@mail.com",
        name: "Maria Andersson",
      },
      {
        email: "alex.karlsson@mail.com",
        name: "Alex Karlsson",
      },
      {
        email: "sara.lindberg@mail.com",
        name: "Sara Lindberg",
      },
      {
        email: "daniel.johansson@mail.com",
        name: "Daniel Johansson",
      },
      {
        email: "emma.eriksson@mail.com",
        name: "Emma Eriksson",
      },
      {
        email: "oscar.nyberg@mail.com",
        name: "Oscar Nyberg",
      },
      {
        email: "elin.holm@mail.com",
        name: "Elin Holm",
      },
      {
        email: "markus.dahl@mail.com",
        name: "Markus Dahl",
      },
      {
        email: "sofie.bergstrom@mail.com",
        name: "Sofie Bergström",
      },
      {
        email: "jonas.falk@mail.com",
        name: "Jonas Falk",
      },
      {
        email: "hanna.soderberg@mail.com",
        name: "Hanna Söderberg",
      },
      {
        email: "lukas.ekman@mail.com",
        name: "Lukas Ekman",
      },
    ],
    skipDuplicates: true,
  });
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
