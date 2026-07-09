import fs from "fs"

const configPath = "openclass.config.json"
const config = JSON.parse(fs.readFileSync(configPath, "utf8"))

let cambios = 0

for (const week of config.weeks || []) {
  if (typeof week.title === "string" && /:\s/.test(week.title)) {
    console.log(`Semana ${week.number}: ${week.title}`)
    week.title = week.title.replace(/:\s*/g, " — ")
    console.log(`       nuevo: ${week.title}`)
    cambios++
  }
}

fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + "\n", "utf8")

console.log(`Títulos corregidos: ${cambios}`)
