# Quick Start: Google Sheets Product Management

## ✅ Setup Complete!

Your site now supports Google Sheets integration for product management. Here's how it works:

## Current State
- **Right now:** Site uses hardcoded products (works perfectly as-is)
- **After setup:** Site loads products from Google Sheets automatically
- **Fallback:** If Google Sheets fails, site uses hardcoded products (zero downtime!)

---

## 🚀 How to Enable Google Sheets (Optional)

### Step 1: Create Google Sheet (5 min)
1. Open [Google Sheets](https://sheets.google.com)
2. Create new spreadsheet: **Shop By Season - Products**
3. Add these headers in Row 1:
   ```
   season | name | retailer | category | shade | price | salePrice | url | confidence | img | dateAdded
   ```
4. Copy your existing products from `app.js` into the sheet (or start fresh!)

### Step 2: Publish as CSV (2 min)
1. File → Share → **Publish to web**
2. Select: **Entire Document** + **Comma-separated values (.csv)**
3. Check: **"Automatically republish when changes are made"**
4. Click **Publish**
5. **Copy the CSV URL** (looks like: `https://docs.google.com/spreadsheets/d/e/.../pub?output=csv`)

### Step 3: Connect to Your Site (1 min)
1. Open `app.js`
2. Find line ~730: `const GOOGLE_SHEET_CSV_URL = '';`
3. Paste your CSV URL:
   ```javascript
   const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/.../pub?output=csv';
   ```
4. Save, commit, and sync to GitHub

**Done!** Your site now loads products from Google Sheets.

---

## 📝 Daily Workflow

### Adding a New Product
1. Open your Google Sheet
2. Add a new row with product details
3. Wait ~5 minutes
4. Product appears on your site automatically!

**No GitHub needed** ✓

### Putting a Product On Sale
1. Find the product row
2. Add sale price in `salePrice` column (e.g., "199 RON")
3. Save
4. SALE badge appears automatically!

### Removing a Sale
1. Find the product row
2. Delete the value in `salePrice` column (leave empty)
3. Save
4. SALE badge disappears!

### When to Use GitHub
- **Never for product changes** (use Google Sheet)
- **Only for code/design changes** (like favicon, badges, styling)

---

## 📊 What Works

All existing features work with Google Sheets:

✅ **Filtering** by season, category, color shade  
✅ **Sorting** by date added, price (low to high)  
✅ **Verified badges** (✓ verified) on all products  
✅ **SALE badges** when `salePrice` is set  
✅ **Strikethrough pricing** for original price  
✅ **Fallback** to hardcoded products if sheet fails  

---

## 🔧 Need Help?

See **GOOGLE_SHEETS_SETUP.md** for:
- Detailed column descriptions
- Troubleshooting tips
- Data format examples
- Season codes reference

---

## ⚡ Quick Reference

**Season Codes:**
`lightSpring`, `warmSpring`, `brightSpring`, `softSummer`, `coolSummer`, `lightSummer`, `softAutumn`, `warmAutumn`, `deepAutumn`, `brightWinter`, `coolWinter`, `deepWinter`

**Retailer Codes:**
`next`, `hm`, `mango`, `zara`, `mohito`

**Category Codes:**
`top`, `dress`, `knit`, `outer`, `accessory`

**Confidence Levels:**
`high`, `medium`, `low`

---

**That's it!** You can now manage 100+ products in a spreadsheet instead of editing code. 🎉

© 2025 Shop By Season
