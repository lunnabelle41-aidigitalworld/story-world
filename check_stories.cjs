const fs = require('fs');

// Read the stories file
const storiesContent = fs.readFileSync('./models/stories.js', 'utf8');

// Simple approach: count language blocks
const languageBlocks = storiesContent.match(/\w+: \[/g);
if (languageBlocks) {
  console.log('Found language blocks:');
  const languages = languageBlocks.map(block => block.replace(': [', ''));
  console.log(languages);
  
  // Count stories for each language
  for (const lang of languages) {
    const langSection = storiesContent.split(`${lang}: [`)[1];
    if (langSection) {
      const storyCount = (langSection.match(/},/g) || []).length;
      console.log(`${lang}: ${storyCount} stories`);
    }
  }
} else {
  console.log('No language blocks found');
}

// Also check the export
const exportMatch = storiesContent.match(/export default stories;/);
console.log('Export statement found:', !!exportMatch);