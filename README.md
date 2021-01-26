# bathymetric-cam-contentful

bathymetric-cam-contentful is a tool importing the Content Model of [bathymetric-cam](https://github.com/bathymetric-cam) to [Contentful](https://www.contentful.com).

## Quick Start

1. **Install via npm**

```bash
npm install
```

2. **Make import-config.json and export-config.json**

Create your account and a Space on Contentful.
Then make the following json files on the top-level directory.

import-config.json
```env
CONTENTFUL_SPACE_ID="YOUR_SPACE_ID"
CONTENTFUL_MANAGEMENT_TOKEN="YOUR_MANAGEMENT_TOKEN"
```

export-config.json
```json
{
  "spaceId": "YOUR_SPACE_ID",
  "managementToken": "YOUR_MANAGEMENT_TOKEN"
}
```

3. **Create a Content Model**

Create the following Content Model on Contentful dashboard.

```
- Name
bathymetry

- Fields
zoom: Integer
x: Integer
y: Integer
geoJSON: JSON Object
```

3. **Import Contentful Content**

TODO