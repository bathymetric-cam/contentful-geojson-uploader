import * as contentful from 'contentful-management'
import * as dotenv from "dotenv"
import * as content from './content.json'

dotenv.config()

const main = async () => {
  const client = contentful.createClient({ accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN })
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID)
  const environment = await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT)
  return await Promise.all(
    content["entries"]
      .map(async entryJSON => {
        return await environment.createEntry('bathymetry', entryJSON)
      })
      .map(async entry => {
        return (await entry).publish()
      })
  )
}
main()
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })