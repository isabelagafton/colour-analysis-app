# Google Sheets Product Management Setup

## Overview
Manage all your products in a Google Sheet instead of editing code. Changes sync automatically to your live website within ~5 minutes.

## Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it: **Shop By Season - Products**

## Step 2: Add Column Headers (Row 1)

Copy these exact headers into Row 1 (order matters):

```
season | name | retailer | category | shade | price | salePrice | url | confidence | img | dateAdded
```

### Column Definitions:

- **season**: Season code - must be one of: `lightSpring`, `warmSpring`, `brightSpring`, `softSummer`, `coolSummer`, `lightSummer`, `softAutumn`, `warmAutumn`, `deepAutumn`, `brightWinter`, `coolWinter`, `deepWinter`
- **name**: Product name (e.g., "Lipsy Pistachio Green Linen-Blend Shirt")
- **retailer**: Store code - must be one of: `next`, `hm`, `mango`, `zara`, `mohito`
- **category**: Product type - must be one of: `top`, `dress`, `knit`, `outer`, `accessory`
- **shade**: Color key from that season's palette (e.g., `pistachio`, `coral`, `mint`)
- **price**: Regular price with currency (e.g., "253 RON")
- **salePrice**: Sale price with currency (e.g., "199 RON") - **leave empty if not on sale**
- **url**: Full product link (e.g., "https://www.next.ro/en/style/...")
- **confidence**: Color match confidence - must be one of: `high`, `medium`, `low`
- **img**: Product image URL (full URL starting with https://)
- **dateAdded**: Date in YYYY-MM-DD format (e.g., "2025-01-15")

## Step 3: Add Your Products

Paste your existing products from Row 2 onward. Here's an example:

| season | name | retailer | category | shade | price | salePrice | url | confidence | img | dateAdded |
|--------|------|----------|----------|-------|-------|-----------|-----|------------|-----|-----------|
| lightSpring | Lipsy Pistachio Green Linen-Blend Shirt | next | top | pistachio | 253 RON | | https://www.next.ro/en/style/su878498/y72754 | high | https://xcdn.next.co.uk/.../Y72754s.jpg | 2025-01-15 |
| lightSpring | Mohito Strappy Midi Dress | mohito | dress | coral | 259 RON | 199 RON | https://www.mohito.com/ro/ro/rochie-midi-cu-bretele-434jo-32x | high | https://static.mohito.com/.../434JO-32X-002-1-1222869.jpg | 2025-01-10 |

## Step 4: Publish Your Sheet as CSV

1. In your Google Sheet, click **File** → **Share** → **Publish to web**
2. In the dropdown, select: **Entire Document**
3. Change format from "Web page" to **Comma-separated values (.csv)**
4. Check **"Automatically republish when changes are made"**
5. Click **Publish**
6. **Copy the CSV link** (looks like: `https://docs.google.com/spreadsheets/d/e/.../pub?output=csv`)

## Step 5: Add CSV Link to Your Website

1. Open `app.js` in your code editor
2. Find the line near the top that says:
   ```javascript
   const GOOGLE_SHEET_CSV_URL = '';
   ```
3. Paste your CSV link between the quotes:
   ```javascript
   const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/.../pub?output=csv';
   ```
4. Save the file
5. Commit and sync to GitHub

## Step 6: Test It!

1. Wait 2-3 minutes for GitHub Pages to deploy
2. Visit your site at shopbyseason.co
3. Your products should load from the Google Sheet!

---

## Daily Workflow

### To Add a New Product:
1. Open your Google Sheet
2. Add a new row with all the product details
3. Wait ~5 minutes - your website updates automatically!
4. **No GitHub needed** for product changes

### To Put a Product On Sale:
1. Find the product row in your sheet
2. Add the sale price in the `salePrice` column (e.g., "199 RON")
3. Save - the SALE badge appears automatically

### To Remove a Sale Price:
1. Find the product row
2. Delete the value in the `salePrice` column (leave it empty)
3. Save - the SALE badge disappears

### When to Use GitHub:
- Only when you change **site code/design** (like we did for favicon, badges, etc.)
- Product updates = Google Sheet only ✓
- Code/design updates = GitHub commit + sync ✓

---

## Troubleshooting

**Products not showing up?**
- Make sure column headers in Row 1 match exactly (case-sensitive)
- Check that the CSV link is published and public
- Wait 5 minutes after changes for cache to clear

**Sale badges not working?**
- Check `salePrice` column has the price in the same format as `price` (e.g., "199 RON")
- Make sure there are no extra spaces

**Products in wrong season?**
- Check the `season` column matches exactly: `lightSpring` not `Light Spring`
- Season codes are case-sensitive and use camelCase

**Need to see the old hardcoded products?**
- They're backed up in `app.js` - if the Google Sheet fails to load, the site falls back to them automatically

---

## Tips

- **Sort by dateAdded** in your sheet to see newest products first
- **Use filters** in Google Sheets to work on one season at a time
- **Color-code rows** to track which products need photos, verification, etc.
- **Add a "notes" column** at the end for internal tracking (won't affect the site)
- **Freeze Row 1** (View → Freeze → 1 row) so headers stay visible when scrolling

---

© 2025 Shop By Season. All products managed via Google Sheets.
