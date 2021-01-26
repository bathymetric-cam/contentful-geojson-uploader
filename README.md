# bathymetric-cam-contentful

bathymetric-cam-contentful is a tool importing the Content Model of [bathymetric-cam](https://github.com/bathymetric-cam) to [Contentful](https://www.contentful.com).

## Quick Start

1. **Install via yarn**

```bash
yarn install
```

2. **Make .env and export-config.json**

Create your account and a Space on Contentful.
Then make the following files on the top-level directory.

.env
```env
CONTENTFUL_ENVIRONMENT="master"
CONTENTFUL_MANAGEMENT_TOKEN="YOUR_MANAGEMENT_TOKEN"
CONTENTFUL_SPACE_ID="YOUR_SPACE_ID"
```

export-config.json
```json
{
  "managementToken": "YOUR_MANAGEMENT_TOKEN",
  "spaceId": "YOUR_SPACE_ID"
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

4. **Import Contentful Content**

Create content.json on the top-level directory.
`entries` key's value is the array of bathymetry contents you upload.

An example of content.json.
```content.json
declare module "*.json" {
  "entries": [
    {
      "fields": {
        "zoom": {
          "en-US": 16
        },
        "x": {
          "en-US": 57483
        },
        "y": {
          "en-US": 25954
        },
        "geoJSON": {
          "en-US": {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {
                  "minDepth": 0,
                  "maxDepth": 1
                },
                "geometry": {
                  "type": "MultiPolygon",
                  "coordinates": [
                    [
                      [
                        [
                          135.765831,
                          35.012183
                        ],
                        [
                          135.765838,
                          35.013594
                        ],
                        [
                          135.766432,
                          35.013601
                        ],
                        [
                          135.766416,
                          35.012174
                        ],
                        [
                          135.765831,
                          35.012183
                        ]
                      ]
                    ]
                  ]
                }
              }
            ]
          }
        }
      }
    }
  ]
}
```

Then run the command.

```shell
yarn contentful:import
```