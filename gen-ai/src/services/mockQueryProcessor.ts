
import { ChartType } from '@/components/visualization/ChartDisplay';
import { QueryResult } from '@/store/querySlice';

// Mock database of predefined responses
const mockResponses: Record<string, QueryResult> = {
  'show monthly revenue trend for 2023': {
    data: [
      { name: 'Jan', value: 45000 },
      { name: 'Feb', value: 52000 },
      { name: 'Mar', value: 48000 },
      { name: 'Apr', value: 61000 },
      { name: 'May', value: 55000 },
      { name: 'Jun', value: 67000 },
      { name: 'Jul', value: 72000 },
      { name: 'Aug', value: 78000 },
      { name: 'Sep', value: 83000 },
      { name: 'Oct', value: 91000 },
      { name: 'Nov', value: 89000 },
      { name: 'Dec', value: 95000 },
    ],
    recommendedChart: 'line',
    summary: 'Monthly revenue showed consistent growth throughout 2023, with a significant increase in Q4.',
  },
  
  'compare sales by product category': {
    data: [
      { name: 'Electronics', value: 420000 },
      { name: 'Clothing', value: 310000 },
      { name: 'Home & Kitchen', value: 250000 },
      { name: 'Books', value: 180000 },
      { name: 'Sports', value: 130000 },
    ],
    recommendedChart: 'bar',
    summary: 'Electronics is our top-selling category, followed by Clothing and Home & Kitchen products.',
  },
  
  'what were our top 5 customers last quarter?': {
    data: [
      { name: 'ABC Corp', value: 78500 },
      { name: 'XYZ Industries', value: 65200 },
      { name: 'Acme Inc', value: 54800 },
      { name: 'Global Partners', value: 47600 },
      { name: 'Tech Solutions', value: 41200 },
    ],
    recommendedChart: 'bar',
    summary: 'ABC Corp remains our highest-value customer, with a significant lead over the second-place XYZ Industries.',
  },
  
  'show conversion rates by marketing channel': {
    data: [
      { name: 'Organic Search', value: 4.2 },
      { name: 'Paid Search', value: 2.8 },
      { name: 'Social Media', value: 3.1 },
      { name: 'Email', value: 5.7 },
      { name: 'Referral', value: 4.9 },
      { name: 'Direct', value: 3.5 },
    ],
    recommendedChart: 'bar',
    summary: 'Email marketing shows the highest conversion rate at 5.7%, followed by Referral at 4.9% and Organic Search at 4.2%.',
  },
  
  // Add more predefined responses for common questions
  'what is our customer retention rate?': {
    data: [
      { name: '0-30 days', value: 92 },
      { name: '31-60 days', value: 84 },
      { name: '61-90 days', value: 76 },
      { name: '91-180 days', value: 68 },
      { name: '181-365 days', value: 54 },
      { name: '365+ days', value: 41 },
    ],
    recommendedChart: 'line',
    summary: 'Customer retention starts high at 92% in the first month but gradually declines over time, with only 41% of customers remaining after a year.',
  },
  
  'show revenue by region': {
    data: [
      { name: 'North America', value: 750000 },
      { name: 'Europe', value: 520000 },
      { name: 'Asia Pacific', value: 420000 },
      { name: 'Latin America', value: 180000 },
      { name: 'Middle East', value: 130000 },
      { name: 'Africa', value: 90000 },
    ],
    recommendedChart: 'pie',
    summary: 'North America generates the highest revenue at $750,000, followed by Europe at $520,000 and Asia Pacific at $420,000.',
  },
  
  'analyze customer acquisition cost trend': {
    data: [
      { name: 'Q1 2022', value: 89 },
      { name: 'Q2 2022', value: 93 },
      { name: 'Q3 2022', value: 98 },
      { name: 'Q4 2022', value: 105 },
      { name: 'Q1 2023', value: 112 },
      { name: 'Q2 2023', value: 108 },
      { name: 'Q3 2023', value: 102 },
      { name: 'Q4 2023', value: 97 },
    ],
    recommendedChart: 'line',
    summary: 'Customer acquisition costs peaked in Q1 2023 at $112 per customer but have been decreasing since, ending at $97 in Q4 2023.',
  },
  
  'what is our website traffic by source?': {
    data: [
      { name: 'Organic Search', value: 42 },
      { name: 'Direct', value: 28 },
      { name: 'Social Media', value: 15 },
      { name: 'Referral', value: 8 },
      { name: 'Email', value: 5 },
      { name: 'Other', value: 2 },
    ],
    recommendedChart: 'pie',
    summary: 'Organic search drives 42% of our website traffic, followed by direct visits at 28% and social media at 15%.',
  },
  
  'compare quarterly sales for the past 2 years': {
    data: [
      { name: 'Q1 2022', value: 310000 },
      { name: 'Q2 2022', value: 340000 },
      { name: 'Q3 2022', value: 360000 },
      { name: 'Q4 2022', value: 420000 },
      { name: 'Q1 2023', value: 380000 },
      { name: 'Q2 2023', value: 410000 },
      { name: 'Q3 2023', value: 440000 },
      { name: 'Q4 2023', value: 510000 },
    ],
    recommendedChart: 'bar',
    summary: 'Sales have shown consistent year-over-year growth across all quarters, with Q4 being the strongest quarter in both years.',
  },
  
  'what is the average order value trend?': {
    data: [
      { name: 'Jan', value: 85 },
      { name: 'Feb', value: 88 },
      { name: 'Mar', value: 92 },
      { name: 'Apr', value: 94 },
      { name: 'May', value: 97 },
      { name: 'Jun', value: 102 },
      { name: 'Jul', value: 105 },
      { name: 'Aug', value: 108 },
      { name: 'Sep', value: 110 },
      { name: 'Oct', value: 112 },
      { name: 'Nov', value: 115 },
      { name: 'Dec', value: 118 },
    ],
    recommendedChart: 'line',
    summary: 'Average order value has steadily increased throughout the year, starting at $85 in January and reaching $118 by December.',
  },
};

// Helper function to find the most appropriate response based on keywords
const findBestMatch = (query: string): QueryResult | null => {
  // Convert to lowercase for matching
  const normalizedQuery = query.toLowerCase().trim();
  
  // First try exact matches
  if (mockResponses[normalizedQuery]) {
    return mockResponses[normalizedQuery];
  }
  
  // Look for keyword matches
  const keywords = [
    { terms: ['revenue', 'sales', 'income', 'earnings', 'money'], responses: ['show monthly revenue trend for 2023', 'compare quarterly sales for the past 2 years'] },
    { terms: ['product', 'category', 'item'], responses: ['compare sales by product category'] },
    { terms: ['customer', 'client', 'buyer'], responses: ['what were our top 5 customers last quarter?', 'what is our customer retention rate?'] },
    { terms: ['conversion', 'marketing', 'ads', 'advertisement'], responses: ['show conversion rates by marketing channel'] },
    { terms: ['region', 'location', 'country', 'area', 'geographic'], responses: ['show revenue by region'] },
    { terms: ['acquisition', 'cost', 'cac'], responses: ['analyze customer acquisition cost trend'] },
    { terms: ['traffic', 'website', 'visitors', 'visits'], responses: ['what is our website traffic by source?'] },
    { terms: ['order', 'purchase', 'transaction', 'average'], responses: ['what is the average order value trend?'] },
  ];
  
  // Find matching keywords
  for (const keywordSet of keywords) {
    for (const term of keywordSet.terms) {
      if (normalizedQuery.includes(term)) {
        // Return the first matching response
        const responseKey = keywordSet.responses[0];
        return mockResponses[responseKey];
      }
    }
  }
  
  return null;
};

// Generate a fallback response for queries not in our predefined list
const generateFallbackResponse = (query: string): QueryResult => {
  // Determine chart type based on query content
  let chartType: ChartType = 'bar';
  if (query.includes('trend') || query.includes('time') || query.includes('growth') || query.includes('over time')) {
    chartType = 'line';
  } else if (query.includes('distribution') || query.includes('breakdown') || query.includes('proportion') || query.includes('percent')) {
    chartType = 'pie';
  }
  
  // Generate relevant data based on query keywords
  let data: { name: string, value: number }[] = [];
  
  if (query.toLowerCase().includes('month') || query.toLowerCase().includes('year')) {
    // Time-based data
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    data = months.map(name => ({
      name,
      value: Math.floor(Math.random() * 100000) + 20000,
    }));
  } else if (query.toLowerCase().includes('product') || query.toLowerCase().includes('category')) {
    // Product categories
    const categories = ['Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Sports', 'Toys', 'Beauty'];
    data = categories.map(name => ({
      name,
      value: Math.floor(Math.random() * 500000) + 50000,
    }));
  } else if (query.toLowerCase().includes('region') || query.toLowerCase().includes('country')) {
    // Regional data
    const regions = ['North America', 'Europe', 'Asia', 'South America', 'Africa', 'Australia'];
    data = regions.map(name => ({
      name,
      value: Math.floor(Math.random() * 800000) + 100000,
    }));
  } else {
    // Default random data
    const categories = ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'];
    data = categories.map(name => ({
      name,
      value: Math.floor(Math.random() * 100000),
    }));
  }
  
  return {
    data,
    recommendedChart: chartType,
    summary: `Analysis completed for query: "${query}". This is a generated response based on available data patterns.`,
  };
};

// Simulate network latency and processing time
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockQueryProcessor = async (query: string): Promise<QueryResult> => {
  // Simulate processing time
  await delay(1500);
  
  // Try to find a best match based on keywords
  const bestMatch = findBestMatch(query);
  if (bestMatch) {
    return bestMatch;
  }
  
  // If no match found, return a dynamically generated response
  return generateFallbackResponse(query);
};
