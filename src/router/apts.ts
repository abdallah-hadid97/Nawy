import express from 'express';

import { getAllApts, addApt, getAptDetails } from '../controllers/apts';

export default (router: express.Router) => {
    router.get('/apts', getAllApts);
    router.post('/apts/add', addApt);
    router.get('/apts/apt_details', getAptDetails);
};