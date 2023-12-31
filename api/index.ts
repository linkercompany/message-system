import { json } from 'express'
import morgan from 'morgan'
import { addRoutes } from './routes'
import { status500 } from 'backend-helper-kit'
import { variables as config } from '../config'
import { config as headerConfig } from './middlewares/header-config'
import { createSession } from './middlewares/session'

import { app } from './ws'

createSession(app) // create session
app.use(headerConfig) // set headers
app.use(morgan('dev')) // logging
app.use(json({ limit: '10mb' })) // parse json
addRoutes(app) // add routes
app.use(status500) // handle errors

app.listen(config.PORT, () => console.log(`Server running! ✅`))

export { app }
