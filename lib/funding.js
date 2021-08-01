import { getCollection } from "@lib/common"

export async function getAllFundingSources() {
  const results = (await getCollection("funding")).map((result) => {
    return {
      id: result.id,
      ...result.data,
    }
  })

  return results.sort((a, b) => {
    if (a.name < b.name) {
      return 1
    } else {
      return -1
    }
  })
}
