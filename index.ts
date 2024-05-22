import { PrismaClient } from '@prisma/client'



const prisma = new PrismaClient({
    log: ["query"]
  })

async function main() {
    await prisma.user.create({
        data: {
          name: 'Rich',
          email: 'hello@prisma.com',
          posts: {
            create: {
              title: 'My first post',
              body: 'Lots of really interesting stuff',
              slug: 'my-first-post',
            },
          },
        },
      })  
  }
  
  main()
    .catch(async (e) => {
      console.error(e)
    })
     prisma.$disconnect();

export default {prisma};