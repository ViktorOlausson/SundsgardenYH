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
        age: 28,
        languages: ["Swedish", "English"],
      },
      {
        email: "anna.svensson@mail.com",
        name: "Anna Svensson",
        age: 24,
        languages: ["Swedish", "English"],
      },
      {
        email: "erik.larsson@mail.com",
        name: "Erik Larsson",
        age: 31,
        languages: ["Swedish", "English", "German"],
      },
      {
        email: "lisa.nilsson@mail.com",
        name: "Lisa Nilsson",
        age: 27,
        languages: ["Swedish", "English"],
      },
      {
        email: "john.doe@example.com",
        name: "John Doe",
        age: 35,
        languages: ["English"],
      },
      {
        email: "maria.andersson@mail.com",
        name: "Maria Andersson",
        age: 29,
        languages: ["Swedish", "English", "Spanish"],
      },
      {
        email: "alex.karlsson@mail.com",
        name: "Alex Karlsson",
        age: 22,
        languages: ["Swedish", "English"],
      },
      {
        email: "sara.lindberg@mail.com",
        name: "Sara Lindberg",
        age: 26,
        languages: ["Swedish", "English", "French"],
      },
      {
        email: "daniel.johansson@mail.com",
        name: "Daniel Johansson",
        age: 33,
        languages: ["Swedish", "English"],
      },
      {
        email: "emma.eriksson@mail.com",
        name: "Emma Eriksson",
        age: 25,
        languages: ["Swedish", "English"],
      },
      {
        email: "oscar.nyberg@mail.com",
        name: "Oscar Nyberg",
        age: 30,
        languages: ["Swedish", "English", "Norwegian"],
      },
      {
        email: "elin.holm@mail.com",
        name: "Elin Holm",
        age: 28,
        languages: ["Swedish", "English"],
      },
      {
        email: "markus.dahl@mail.com",
        name: "Markus Dahl",
        age: 34,
        languages: ["Swedish", "English", "German"],
      },
      {
        email: "sofie.bergstrom@mail.com",
        name: "Sofie Bergström",
        age: 27,
        languages: ["Swedish", "English", "Danish"],
      },
      {
        email: "jonas.falk@mail.com",
        name: "Jonas Falk",
        age: 32,
        languages: ["Swedish", "English"],
      },
      {
        email: "hanna.soderberg@mail.com",
        name: "Hanna Söderberg",
        age: 23,
        languages: ["Swedish", "English", "French"],
      },
      {
        email: "lukas.ekman@mail.com",
        name: "Lukas Ekman",
        age: 29,
        languages: ["Swedish", "English"],
      },
      {
        email: "lukas2.ekman@mail.com",
        name: "Lukas Ekman",
        age: 39,
        languages: ["Swedish"],
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
