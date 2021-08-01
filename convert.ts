import { GeoJSON } from 'geojson'
import * as fs from 'fs'

const GEOJSON_DIR = './geojson'

class Entry {
  fields: {
    zoom: {
      "en-US": number
    }
    x: {
      "en-US": number
    }
    y: {
      "en-US": number
    }
    geoJSON: {
      "en-US": GeoJSON
    }
  }

  constructor(zoom: number, x: number, y: number, geoJSON: GeoJSON) {
    this.fields = {
      zoom: {'en-US': zoom},
      x: {'en-US': x},
      y: {'en-US': y},
      geoJSON: {'en-US': geoJSON}
    }
  }
}

const entries = fs.readdirSync(GEOJSON_DIR)
  .filter((value) => { return value.endsWith('.geojson') })
  .filter((value) => { return value.split('.').length === 4 })
  .map((value) => {
    const components = value.split('.')
    const geoJSON = JSON.parse(fs.readFileSync(`${GEOJSON_DIR}/${value}`,'utf8')) as GeoJSON 
    return new Entry(parseInt(components[0]), parseInt(components[1]), parseInt(components[2]), geoJSON)
  })
fs.writeFileSync(
  './content.json',
  JSON.stringify({entries: entries})
)