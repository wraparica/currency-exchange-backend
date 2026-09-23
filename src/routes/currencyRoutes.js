import { Router } from 'express';
import { fetchRate, fetchHistoricalRate, fetchHistoricalTimeSeries, fetchCurrencies, fetchDisplayCurrencies } from '../controllers/currencyController.js';

const router = Router();

router.get('/', fetchRate);

router.get('/historicalRate', fetchHistoricalRate);

router.get('/historicalTimeSeries', fetchHistoricalTimeSeries);

router.get('/currencies', fetchCurrencies);

router.get('/displayCurrencies', fetchDisplayCurrencies);

export default router;