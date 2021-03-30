import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

// Full path to the pages directory.
const pagesDirectory = path.join(process.cwd(), 'content/pages')


// Helper function to get page data.
export async function getPage(name) {

  // Get the path to the markdown file using the provided name.
  const fullPath = path.join(pagesDirectory, `${name}.md`)
  
  // Read the file contents.
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Process the file contents as markdown and frontmatter.
  const result = matter(fileContents)
  // Process the markdown into HTML.
  const processedMarkdown = await remark()
    .use(html)
    .process(result.content)

  // Convert the HTML to string.
  const content = processedMarkdown.toString()

  // Return the page.
  return {
    content,  // The HTML content.
    ...result.data  // Front-matter metadata.
  }
}