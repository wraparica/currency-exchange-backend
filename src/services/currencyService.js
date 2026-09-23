import { config } from '../config/index.js';
import { AppError } from '../utils/AppError.js';

/**
 * @param {string} base
 * @param {string} quote
 * @returns {Promise<object>} 
 */
export async function getRate(base, quote) {
  const url = new URL(`${config.frankfurter.baseUrl}${encodeURIComponent(base)}/${encodeURIComponent(quote)}`);

  let response;
  try {
    response = await fetch(url);
  } catch (err) {
    throw new AppError('Failed to reach currency provider', 502);
  }

  let data;
  try {
    data = await response.json();
  } catch (err) {
    throw new AppError('Received an invalid response from currency provider', 502);
  }

  if (!response.ok) {
    const message = data?.message || 'Failed to fetch currency data';
    throw new AppError(message, response.status);
  }

  return data;
}

/**
 * @param {string} date
 * @param {string} base
 * @param {string} quote
 * @returns {Promise<object>} 
 */

export async function getHistoricalRate(date, base, quote) {
  const url = new URL(config.frankfurter.historical);

  url.searchParams.set('date', date);
  url.searchParams.set('base', base);
  url.searchParams.set('quotes', quote);

  let response;
  try {
    response = await fetch(url);
  } catch (err) {
    throw new AppError('Failed to reach currency provider', 502);
  }

  let data;
  try {
    data = await response.json();
  } catch (err) {
    throw new AppError('Received an invalid response from currency provider', 502);
  }

  if (!response.ok) {
    const message = data?.message || 'Failed to fetch currency data';
    throw new AppError(message, response.status);
  }

  return data;
}

/**
 * @param {string} date
 * @param {string} base
 * @param {string} quote
 * @returns {Promise<object>} 
 */

export async function getHistoricalTimeSeries(from, to, base, quote) {
  const url = new URL(config.frankfurter.historical);

  url.searchParams.set('from', from);
  url.searchParams.set('to', to);
  url.searchParams.set('base', base);
  url.searchParams.set('quotes', quote);

  let response;
  try {
    response = await fetch(url);
  } catch (err) {
    throw new AppError('Failed to reach currency provider', 502);
  }

  let data;
  try {
    data = await response.json();
  } catch (err) {
    throw new AppError('Received an invalid response from currency provider', 502);
  }

  if (!response.ok) {
    const message = data?.message || 'Failed to fetch currency data';
    throw new AppError(message, response.status);
  }

  return data;
}

export async function getCurrencies() {
  const url = new URL(config.frankfurter.currencies);

  let response;
  try {
    response = await fetch(url);
  } catch (err) {
    throw new AppError('Failed to reach currency provider', 502);
  }

  let data;
  try {
    data = await response.json();
  } catch (err) {
    throw new AppError('Received an invalid response from currency provider', 502);
  }

  if (!response.ok) {
    const message = data?.message || 'Failed to fetch currency data';
    throw new AppError(message, response.status);
  }

  return data;
}

export async function getDisplayCurrencies(base, quote) {
  const url = new URL(config.frankfurter.historical);

  url.searchParams.set('base', base);
  url.searchParams.set('quotes', quote);

  let response;
  try {
    response = await fetch(url);
  } catch (err) {
    throw new AppError('Failed to reach currency provider', 502);
  }

  let data;
  try {
    data = await response.json();
  } catch (err) {
    throw new AppError('Received an invalid response from currency provider', 502);
  }

  if (!response.ok) {
    const message = data?.message || 'Failed to fetch currency data';
    throw new AppError(message, response.status);
  }

  return data;
}

