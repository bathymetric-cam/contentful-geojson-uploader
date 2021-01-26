import * as contentful from 'contentful-management'

const client = contentful.createClient({
  accessToken: 'YOUR_ACCESS_TOKEN',
})

client.getSpace('spaceId').then((space) => {
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