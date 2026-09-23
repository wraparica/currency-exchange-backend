import { getRate, getHistoricalRate, getHistoricalTimeSeries, getCurrencies, getDisplayCurrencies } from '../services/currencyService.js';
import { AppError } from '../utils/AppError.js';

export async function fetchRate(req, res, next) {
  try {
    const {base, quote, amount} = req.query;

    if ((!base || !base.trim())) {
      throw new AppError('Query parameter "base" is required', 400);
    }

    if ((!quote || !quote.trim())) {
      throw new AppError('Query parameter "quote" is required', 400);
    }

    if ((!amount || !amount.trim())) {
      throw new AppError('Query parameter "amount" is required', 400);
    }

    const data = await getRate(base.trim(), quote.trim());

    const convertedAmount = amount * data.rate;

    res.status(200).json({
      success: true,
      data,
      amount,
      convertedAmount,
    });
  } catch (err) {
    next(err);
  }
}

export async function fetchHistoricalRate(req, res, next) {
  try {
    const { date, base, quote} = req.query;

    if ((!base || !base.trim())) {
      throw new AppError('Query parameter "base" is required', 400);
    }

    if ( (!quote || !quote.trim())) {
      throw new AppError('Query parameter "quote" is required', 400);
    }

    if ((!from || !from.trim())) {
      throw new AppError('Query parameter "from" is required', 400);
    }

    if ((!to || !to.trim())) {
      throw new AppError('Query parameter "to" is required', 400);
    }

    const data = await getHistoricalRate(date.trim(), base.trim(), quote.trim());

    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    next(err);
  }
}

export async function fetchHistoricalTimeSeries(req, res, next) {
  try {
    const { from, to, base, quote} = req.query;

    if ((!base || !base.trim())) {
      throw new AppError('Query parameter "base" is required', 400);
    }

    if ( (!quote || !quote.trim())) {
      throw new AppError('Query parameter "quote" is required', 400);
    }

    if ((!from || !from.trim())) {
      throw new AppError('Query parameter "from" is required', 400);
    }

    if ((!to || !to.trim())) {
      throw new AppError('Query parameter "to" is required', 400);
    }

    const data = await getHistoricalTimeSeries(from.trim(), to.trim(), base.trim(), quote.trim());

    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    next(err);
  }
}

export async function fetchCurrencies(_, res, next) {
  try {
    
    const data = await getCurrencies();
    console.log("🔥 fetchCurrencies() CALLED");  
    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    next(err);
  }
}

export async function fetchDisplayCurrencies(_, res, next) {
  try { 
    const base = "PHP";
    const quotes = "USD,JPY,AUD,EUR,HKD,SGD,CAD,GBP,CNY,KRW";
    const data = await getDisplayCurrencies(base.trim(), quotes.trim());

    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    next(err);
  }
}