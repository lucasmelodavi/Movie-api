import { prisma } from "@/lib/prisma";

export async function GET() {
  const movie = await prisma.movie.create({
    data: {
      title: "Interestelar",
      description: "Filme de ficção científica",
    },
  });

  return Response.json(movie);
}