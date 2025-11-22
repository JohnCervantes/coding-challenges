import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// --- Module Setup for __dirname equivalent ---
// In ES modules, __dirname is not available. We use fileURLToPath and path.dirname.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// ---------------------------------------------

const app = express();
const port = 3000;

// The static folder is now explicitly set to 'public'.
// All files inside the 'public' directory will be served from the root URL.
app.use(express.static(path.join(__dirname, 'public')));


// Start the server
app.listen(port, () => {
  console.log('----------------------------------------------------');
  console.log(`🚀 Server running at http://localhost:${port}`);
  console.log('----------------------------------------------------');
});