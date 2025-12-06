const fs = require('fs');
const path = require('path');

// Import stories data
const stories = require('./models/stories.js');

console.log('Stories object keys:', Object.keys(stories));
console.log('English stories type:', typeof stories.english);
console.log('English stories length:', stories.english ? stories.english.length : 'undefined');

// Check if stories.english is an array
if (Array.isArray(stories.english)) {
  console.log('English stories is an array');
  console.log('First story:', stories.english[0]);
} else {
  console.log('English stories is NOT an array');
  console.log('English stories value:', stories.english);
}