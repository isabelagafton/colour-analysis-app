# Quick Start: Google Sheets Product Management

## ✅ Google Sheets is Live!

Your site is now powered by Google Sheets for product management. Here's how it works:

## Current State
- **Product Feed:** Google Sheets (live and active!)
- **Updates:** Edit the sheet → changes appear on site in ~5 minutes
- **Fallback:** If Google Sheets fails, site uses hardcoded products (zero downtime!)

---

## 📝 Daily Workflow

### Adding a New Product
1. Open your Google Sheet
2. Add a new row with product details
3. Save (auto-saves in Google Sheets)
4. Wait ~5 minutes for changes to publish
5. Product appears on shopbyseason.co automatically!

**No GitHub, no code, no commit/sync needed!** ✓

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
`top`, `dress`, `knit`, `outer`, `trousers`, `shorts`, `skirts`, `accessory`

**Important:** Use plural forms! (`skirts` not `skirt`, `trousers` not `trouser`)

**Confidence Levels:**
`high`, `medium`, `low`

---

**That's it!** You can now manage 100+ products in a spreadsheet instead of editing code. 🎉

© 2025 Shop By Season
