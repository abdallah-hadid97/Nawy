import express from 'express';

import { getApts, createApt, getAptByRef } from '../db/apts';

export const getAllApts = async (req: express.Request, res: express.Response) => {
    try {
        const apts = await getApts();

        return res.status(200).json(apts);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const addApt = async (req: express.Request, res: express.Response) => {
    try {
        const {ref, title, location, price, bedrooms, bathrooms, area, finished, deliveryDate} = req.body;
        const apt = await createApt({ref, title, location, price, bedrooms, bathrooms, area, finished, deliveryDate});

        return res.status(200).json(apt).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const getAptDetails = async (req: express.Request, res: express.Response) => {
    try {
        const {ref} = req.body;
        const apt = await getAptByRef(ref);

        return res.status(200).json(apt);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};