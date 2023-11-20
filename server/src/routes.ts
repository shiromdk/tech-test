import { Router } from 'express'
import leadRoutes from './feature/leads/routes'

export default () => {
    const app = Router();
    leadRoutes(app)
    return app;
}