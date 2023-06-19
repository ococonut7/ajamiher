import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main()
{
    const nuevoestudiante = await prisma.estudiante.create({
        data: {
            nombre: "elpepe",
            pais: "Costa Rica",
            email: "elpepe@cibercriminal.net"
        }
    })
    console.log("eres pendeoj ya se registro: ", nuevoestudiante)
    const todosEstudiantes = await prisma.estudiante.findMany();
    console.log("Todos mis juguetes mandalos a la luna: ")
    console.dir(todosEstudiantes, { dept:null});
}
main()
.catch((e) => {
    console.error(e)
    Process.exit(1);
})

.finally(async () => {
    await prisma.$disconnect();
})
