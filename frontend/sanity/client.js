import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: "a54msza5",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07"
})

//skLYOZLjor19S0pT5CR6wMbya5vtfdIoMyZBEPLv9A5A1doRp5YylVnC2C1jzwl0Og2JS2bHyeGjvgB4JsTHszdhROzuFWyUELs6MQyR0lEeVFHLLAMZxnqG3hNbgppuQLTonJ5xR5DyBnvAGFLGFV1m4oWa1hu6ANQEGKd7K7kmUq4evlsj

export const writeClient = createClient({
  projectId: "a54msza5",
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-03-07",
  token: "skLYOZLjor19S0pT5CR6wMbya5vtfdIoMyZBEPLv9A5A1doRp5YylVnC2C1jzwl0Og2JS2bHyeGjvgB4JsTHszdhROzuFWyUELs6MQyR0lEeVFHLLAMZxnqG3hNbgppuQLTonJ5xR5DyBnvAGFLGFV1m4oWa1hu6ANQEGKd7K7kmUq4evlsj"
})