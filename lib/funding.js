import fs from "fs"
import path from "path"
import matter from "gray-matter"

const fundingDirectory = path.join(process.cwd(), "content/funding")

export function getAllFundingSources() {
  const filenames = fs.readdirSync(fundingDirectory)
  const funding = filenames.map((filename) => {
    const id = filename.replace(/\.md$/, "")

    const fullPath = path.join(fundingDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const result = matter(fileContents)
    return {
      id,
      ...result.data,
    }
  })

  return funding.sort((a, b) => {
    if (a.name < b.name) {
      return 1
    } else {
      return -1
    }
  })
}
