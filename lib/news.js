import { getCollection } from "@lib/common"

export async function getAllNews() {
  const results = (await getCollection("news")).map((result) => {
    return {
      id: result.id,
      ...result.data,
      published: result.data.published.toISOString(),
    }
  })

  return results.sort((a, b) => {
    const apub = new Date(a.published)
    const bpub = new Date(b.published)
    if (apub < bpub) {
      return 1
    } else {
      return -1
    }
  })
}
