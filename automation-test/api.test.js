const axios = require('axios');

const API_BASE_URL = 'https://fakestoreapi.com';

// Helper function to fetch products
async function getProducts() {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response;
}

describe('Fake Store API Tests', () => {
  let productsResponse;
  let productsData;

  // Setup - fetch products once before all tests
  beforeAll(async () => {
    productsResponse = await getProducts();
    productsData = productsResponse.data;
  });

  test('server should respond with status code 200', () => {
    expect(productsResponse.status).toBe(200);
  });

  test('products list should not be empty', () => {
    expect(productsData.length).toBeGreaterThan(0);
  });

  test('all products should have valid titles', () => {
    const productsWithInvalidTitles = productsData.filter(
      product => !product.title || !product.title.trim()
    );

    if (productsWithInvalidTitles.length > 0) {
      console.log('Products with invalid titles:', productsWithInvalidTitles);
    }

    expect(productsWithInvalidTitles.length).toBe(0);
  });

  test('all products should have valid prices (non-negative)', () => {
    const productsWithInvalidPrices = productsData.filter(
      product => !product.price || 
                 typeof product.price !== 'number' || 
                 product.price < 0
    );

    if (productsWithInvalidPrices.length > 0) {
      console.log('Products with invalid prices:', productsWithInvalidPrices);
    }

    expect(productsWithInvalidPrices.length).toBe(0);
  });

  test('all product ratings should not exceed 5', () => {
    const productsWithInvalidRatings = productsData.filter(
      product => !product.rating ||
                 !product.rating.rate ||
                 typeof product.rating.rate !== 'number' ||
                 product.rating.rate > 5
    );

    if (productsWithInvalidRatings.length > 0) {
      console.log('Products with invalid ratings:', productsWithInvalidRatings);
    }

    expect(productsWithInvalidRatings.length).toBe(0);
  });

  test('generate defect report for all products', () => {
    const defectiveProducts = productsData.reduce((acc, product) => {
      const defects = [];

      // Check title
      if (!product.title || !product.title.trim()) {
        defects.push('Missing or empty title');
      }

      // Check price
      if (!product.price || typeof product.price !== 'number' || product.price < 0) {
        defects.push('Invalid price');
      }

      // Check rating
      if (!product.rating ||
          !product.rating.rate ||
          typeof product.rating.rate !== 'number' ||
          product.rating.rate > 5) {
        defects.push('Invalid rating');
      }

      if (defects.length > 0) {
        acc.push({
          id: product.id || 'Unknown',
          defects
        });
      }

      return acc;
    }, []);

    if (defectiveProducts.length > 0) {
      console.log('Defective products report:', JSON.stringify(defectiveProducts, null, 2));
    }

    expect(defectiveProducts.length).toBe(0);
  });
}); 