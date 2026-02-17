import fs from 'fs';
import path from 'path';

console.log('Building JavaScript bundle...');

// Read all component files
const files = [
    'js/data/quiz-data.js',
    'js/data/simulation-data.js',
    'js/data/prodi-data.js',
    'js/components/modal.js',
    'js/components/toast.js',
    'js/components/navbar.js',
    'js/components/hero.js',
    'js/components/quiz.js',
    'js/components/simulator.js',
    'js/components/explore.js',
    'js/main.js',
];

let bundleContent = `/**
 * Digital Hasnur - Complete Application Bundle
 * Generated automatically - works without server
 */

(function() {
    'use strict';
    
    console.log('Digital Hasnur - Loading...');
    
`;

// Read and process each file
files.forEach((file) => {
    try {
        let content = fs.readFileSync(file, 'utf8');

        // Remove export statements
        content = content.replace(/export\s+(const|let|var|function|class)\s+/g, '$1 ');
        content = content.replace(/export\s+\{[^}]+\}/g, '');
        content = content.replace(/export\s+default\s+/g, '');

        // Remove import statements
        content = content.replace(/import\s+.*from\s+['"].*['"];?\n?/g, '');

        bundleContent += `\n// ============================================\n`;
        bundleContent += `// ${file}\n`;
        bundleContent += `// ============================================\n\n`;
        bundleContent += content + '\n';

        console.log(`✓ Processed: ${file}`);
    } catch (err) {
        console.error(`✗ Error processing ${file}:`, err.message);
    }
});

bundleContent += `\n})();\n`;

// Write bundle file
fs.writeFileSync('js/app-bundle.js', bundleContent);

console.log('\n✓ Bundle created successfully: js/app-bundle.js');
console.log('You can now open index.html directly in any browser!');
