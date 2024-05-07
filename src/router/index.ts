import express from 'express';

import apts from './apts';

const router = express.Router();

export default (): express.Router => {
    apts(router);

    return router;
}; 