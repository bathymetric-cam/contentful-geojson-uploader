import * as contentful from 'contentful-management'
import * as dotenv from "dotenv"

dotenv.config()

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
})

client.getSpace(process.env.CONTENTFUL_SPACE_ID).then((space) => {
  // This API call will request an environment with the specified ID
  space.getEnvironment('master').then((environment) => {
    // Now that we have an environment, we can get entries from that space
    environment.getEntries().then((entries) => {
      console.log(entries.items)
    })

    // let's get a content type
    environment.getContentType('product').then((contentType) => {
      // and now let's update its name
      contentType.name = 'New Product'
      contentType.update().then((updatedContentType) => {
        console.log('Update was successful')
      })
    })
  })
})