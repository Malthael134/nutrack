import { prisma } from "@/prisma"



export async function NutrientsList() {
    "use server"

    const nutrients = await prisma.nutrients.findMany()

    return nutrients.length > 0 ? (
        <>
            <h1 className="text-xl">{nutrients.length}</h1>
            <ul className="nutrients-list">
                {nutrients.map((nutrient) => (
                    <li>
                        {nutrient.title}
                    </li>
                ))}
            </ul>
        </>
    ) : (
        <div className="nutrients-empty">Could not find any nutrients in the database</div>
    )
}