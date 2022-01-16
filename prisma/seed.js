/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const seedData = [
  {
    name: 'Marijn Haverbeke',
    email: 'marijn.haverbeke@email.com',
    books: {
      create: [
        {
          isbn: '9781593279509',
          title: 'Eloquent JavaScript, Third Edition',
          subtitle: 'A Modern Introduction to Programming',
          published: '2018-12-04T00:00:00.000Z',
          pages: 472,
          description:
            'JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
          website: 'http://eloquentjavascript.net/',
        },
      ],
    },
  },
  {
    name: 'Nicolás Bevacqua',
    email: 'nico.bevacqua@email.com',
    books: {
      create: [
        {
          isbn: '9781491943533',
          title: 'Practical Modern JavaScript',
          subtitle: 'Dive into ES6 and the Future of JavaScript',

          published: '2017-07-16T00:00:00.000Z',
          pages: 334,
          description:
            'To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.',
          website: 'https://github.com/mjavascript/practical-modern-javascript',
        },
      ],
    },
  },
  {
    name: 'Nicholas C. Zakas',
    email: 'nicholasc.zakas@email.com',
    books: {
      create: [
        {
          isbn: '9781593277574',
          title: 'Understanding ECMAScript 6',
          subtitle: 'The Definitive Guide for JavaScript Developers',
          published: '2016-09-03T00:00:00.000Z',
          pages: 352,
          description:
            'ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.',
          website: 'https://leanpub.com/understandinges6/read',
        },
        {
          isbn: '9780470227800',
          title: 'Professional JavaScript for Web Developers, 2nd Edition',
          subtitle: 'Professional JavaScript for Web Developers, 2nd Edition, provides a developer-level introduction along with the more advanced and useful features of JavaScript.',
          published: '2009-01-03T00:00:00.000Z',
          pages: 840,
          description:
            'Probably the most complete and updated book that you may find about Javascript.The author made a great job writting about some of the most important topics on javascript development and highlighting the difference among browsers. Most of the topics are already covered in other javascript books I have read before, but not in the way Nicholas does, he usually goes deeper on every topic.If you have some knowledge on javascript and want to reach another level, this is the book for you. If you consider yourself a guru, you may enjoy it as well, but definitely, not for newbies.',
          website: 'https://www.amazon.com/Professional-JavaScript-Developers-Nicholas-Zakas/dp/047022780X'
        },
      ],
    },
  },
  {
    name: 'Axel Rauschmayer',
    email: 'rauschma@email.com',
    books: {
      create: [
        {
          isbn: '9781449365035',
          title: 'Speaking JavaScript',
          subtitle: 'An In-Depth Guide for Programmers',
          published: '2014-04-08T00:00:00.000Z',
          pages: 460,
          description:
            'Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.',
          website: 'http://speakingjs.com/',
        },
      ],
    },
  },
  {
    name: 'Addy Osmani',
    email: 'addyosmani@email.com',
    books: {
      create: [
        {
          isbn: '9781449331818',
          title: 'Learning JavaScript Design Patterns',
          subtitle: "A JavaScript and jQuery Developer's Guide",
          published: '2012-08-30T00:00:00.000Z',
          pages: 254,
          description:
            "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
          website:
            'http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/',
        },
      ],
    },
  },
  {
    name: 'Kyle Simpson',
    email: 'getify@email.com',
    books: {
      create: [
        {
          isbn: '9798602477429',
          title: "You Don't Know JS Yet",
          subtitle: 'Get Started',
          published: '2020-01-28T00:00:00.000Z',
          pages: 143,
          description:
            "The worldwide best selling You Don't Know JS book series is back for a 2nd edition: You Don't Know JS Yet. All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond.",
          website:
            'https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started',
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  try {
    await Promise.all(
      seedData.map((author) =>
        prisma.author.create({
          data: author,
        })
      )
    );
    console.log(`Seeding finished.`);
  } catch (error) {
    throw new Error('Seeding failed');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
