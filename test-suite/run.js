const { execSync } = require('child_process');
const path = require('path');
const valid = path.join(__dirname, '../examples/valid-single.json');
const invalid = path.join(__dirname, '../examples/invalid-missing-id.json');
console.log('Running validator tests...');
try {
execSync(npx ecom-feed-validate "${valid}", { stdio: 'ignore' });
console.log('Valid test passed');
} catch (e) {
console.error('Valid test failed');
process.exit(1);
}
try {
execSync(npx ecom-feed-validate "${invalid}", { stdio: 'ignore' });
console.error('Invalid test should have failed');
process.exit(1);
} catch (e) {
console.log('Invalid test passed (correctly failed)');
}
console.log('All tests passed!');
