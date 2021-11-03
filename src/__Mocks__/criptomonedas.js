import {readFileSync} from 'fs'

import path from 'path'

export const criptos = JSON.parse(
    readFileSync(path.join(__dirname, 'markets.json')).toString()
)