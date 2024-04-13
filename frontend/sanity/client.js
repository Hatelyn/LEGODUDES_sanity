import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: "a54msza5",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07"
})