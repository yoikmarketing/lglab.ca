import { readdir, readFile } from "fs/promises"
import { join } from "path"
import matter from "gray-matter"

// Set a constant for the base directory.
const BASE_DIR = process.cwd()

export async function getItem(collection, id) {
  // Deterimine the item path.
  const path = join(BASE_DIR, "content", collection, `${id}.md`)

  // Read the file.
  const contents = await readFile(path, "utf-8")

  // Parse the contents as matter result.
  const result = matter(contents)

  // Return the result.
  return result
}

export async function getCollection(name) {
  // Determine the collection directory.
  const collectionDir = join(BASE_DIR, "content", name)

  // Read all filenames in the collection directory.
  const filenames = await readdir(collectionDir)

  // Create an empty array to store results.
  const results = []

  // For every file in the collection directory...
  for (const filename of filenames) {
    // Parse an ID for the collection item.
    const id = filename.replace(/\.md$/, "")

    // Determine the full path to the file.
    const path = join(collectionDir, filename)

    // Read the file.
    const contents = await readFile(path, "utf-8")

    // Parse the contents as matter result.
    const result = matter(contents)

    // Add the ID to the result.
    result.id = id

    // Add the result to the list of results.
    results.push(result)
  }

  // Return the results.
  return results
}
