import remark from "remark"
import html from "remark-html"

import { getItem } from "@lib/common"

export async function getPage(name) {
  const result = await getItem("pages", name)
  const content = (await remark().use(html).process(result.content)).toString()

  return {
    content,
    ...result.data,
  }
}
