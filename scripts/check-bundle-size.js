#!/usr/bin/env node

/**
 * Bundle Size Checker
 * Analyzes webpack stats and enforces size limits
 */

const fs = require('fs');
const path = require('path');

const STATS_FILE = path.join(__dirname, '..', 'webpack-stats.json');
const MAX_BUNDLE_SIZE = 500 * 1024; // 500KB
const MAX_ASSET_SIZE = 250 * 1024;  // 250KB

if (!fs.existsSync(STATS_FILE)) {
  console.log('⚠️  webpack-stats.json not found. Run build first.');
  process.exit(0);
}

const stats = JSON.parse(fs.readFileSync(STATS_FILE, 'utf8'));

console.log('\n📦 Bundle Size Analysis\n');
console.log('═'.repeat(50));

let hasError = false;
let totalSize = 0;

if (stats.assets && Array.isArray(stats.assets)) {
  stats.assets.forEach(asset => {
    const size = asset.size;
    const sizeKB = (size / 1024).toFixed(2);
    totalSize += size;
    
    let status = '✅';
    if (size > MAX_ASSET_SIZE) {
      status = '❌';
      hasError = true;
    } else if (size > MAX_ASSET_SIZE * 0.8) {
      status = '⚠️ ';
    }
    
    console.log(`${status} ${asset.name.padEnd(30)} ${sizeKB.padStart(10)} KB`);
  });
}

console.log('═'.repeat(50));

const totalKB = (totalSize / 1024).toFixed(2);
const maxKB = (MAX_BUNDLE_SIZE / 1024).toFixed(2);

console.log(`\nTotal Bundle Size: ${totalKB} KB / ${maxKB} KB`);

if (totalSize > MAX_BUNDLE_SIZE) {
  console.log('\n❌ Bundle size exceeds limit!');
  console.log('\nSuggestions:');
  console.log('  • Enable code splitting');
  console.log('  • Remove unused dependencies');
  console.log('  • Use dynamic imports');
  console.log('  • Analyze bundle with webpack-bundle-analyzer\n');
  process.exit(1);
} else if (totalSize > MAX_BUNDLE_SIZE * 0.8) {
  console.log('\n⚠️  Bundle size is approaching limit');
} else {
  console.log('\n✅ Bundle size is within limits');
}

// Show largest modules if available
if (stats.modules && Array.isArray(stats.modules)) {
  const largeModules = stats.modules
    .filter(m => m.size > 50 * 1024) // > 50KB
    .sort((a, b) => b.size - a.size)
    .slice(0, 5);
  
  if (largeModules.length > 0) {
    console.log('\n📊 Largest Modules:');
    largeModules.forEach(module => {
      const sizeKB = (module.size / 1024).toFixed(2);
      const name = module.name || module.identifier || 'unknown';
      console.log(`   ${sizeKB.padStart(8)} KB - ${name.substring(0, 60)}`);
    });
  }
}

console.log('');
process.exit(hasError ? 1 : 0);
