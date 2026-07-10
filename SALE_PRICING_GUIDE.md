# Sale Pricing & Discount Management Guide

## Overview

The sale pricing system allows you to highlight discounted products with visual indicators and automatically sorts by the sale price when applicable.

---

## 🎯 How to Mark a Product as On Sale

### Option 1: Manual Update (Current System)

When a product goes on sale, simply add a `salePrice` field to the product object:

```javascript
// BEFORE (Regular Price)
{
  season: 'lightSpring',
  name: 'Love & Roses Apricot Lace Blouse',
  retailer: 'next',
  category: 'top',
  shade: 'apricot',
  price: '298 RON',  // Regular price
  url: 'https://...',
  confidence: 'high',
  img: 'https://...',
  dateAdded: '2024-12-11'
}

// AFTER (On Sale)
{
  season: 'lightSpring',
  name: 'Love & Roses Apricot Lace Blouse',
  retailer: 'next',
  category: 'top',
  shade: 'apricot',
  price: '298 RON',        // Keep original price
  salePrice: '199 RON',    // ← Add this line with sale price
  url: 'https://...',
  confidence: 'high',
  img: 'https://...',
  dateAdded: '2024-12-11'
}
```

### When Sale Ends

Remove the `salePrice` field or delete that line entirely:

```javascript
// Sale ended - back to regular price
{
  season: 'lightSpring',
  name: 'Love & Roses Apricot Lace Blouse',
  retailer: 'next',
  category: 'top',
  shade: 'apricot',
  price: '298 RON',  // Back to regular price display
  url: 'https://...',
  // salePrice removed - no longer on sale
}
```

---

## 🎨 Visual Indicators

When a product has a `salePrice`, users will see:

### 1. **Sale Badge**
- Red "SALE" badge in top-right corner of product image
- Background: `#E14F35` (warm red)
- Positioned above the product image

### 2. **Strikethrough Original Price**
- Original price shown with strikethrough: ~~298 RON~~
- Smaller, grey text for subtle contrast

### 3. **Red Sale Price**
- Sale price displayed in bold red: **199 RON**
- Eye-catching color: `#E14F35`
- Larger font weight (600)

### Example Display:
```
┌─────────────────────────┐
│  [SALE]      [✓verified]│
│                         │
│    Product Image        │
│                         │
└─────────────────────────┘
Product Name
~~298 RON~~ 199 RON  [Shop →]
```

---

## 💰 Price Sorting Behavior

When "Price: Low to High" is selected:
- Products are sorted by their **effective price** (sale price if available, otherwise regular price)
- A product with `price: '298 RON', salePrice: '199 RON'` will be sorted as **199 RON**
- This ensures sale items appear in the correct position for budget-conscious shoppers

### Example Sort Order:
1. Product A: ~~150 RON~~ **99 RON** (on sale)
2. Product B: 120 RON (regular)
3. Product C: ~~200 RON~~ **149 RON** (on sale)
4. Product D: 180 RON (regular)

---

## 🔄 Workflow Examples

### Scenario 1: Next.ro announces a 30% off sale
1. Visit Next.ro and check which of your curated products are on sale
2. For each product on sale, calculate the sale price
3. Add `salePrice: 'XXX RON'` to those products in `app.js`
4. Users immediately see the sale badges and red prices

### Scenario 2: End of season sale - multiple items
```javascript
// Mark 5 Light Spring items as on sale
{..., price: '253 RON', salePrice: '179 RON', ...},
{..., price: '298 RON', salePrice: '199 RON', ...},
{..., price: '343 RON', salePrice: '239 RON', ...},
{..., price: '290 RON', salePrice: '199 RON', ...},
{..., price: '283 RON', salePrice: '189 RON', ...},
```

### Scenario 3: Sale ends after 2 weeks
1. Remove all `salePrice` fields from products
2. Products return to regular pricing display
3. No sale badges shown

---

## 🤖 Automation Options (Future)

### Option A: Web Scraping (Complex)
**Pros:**
- Fully automatic price updates
- Always shows current prices

**Cons:**
- Requires backend server
- Websites may block scrapers
- Needs maintenance when retailer sites change
- May violate terms of service

**Not recommended** for your current setup due to complexity.

### Option B: Retailer APIs (Ideal but Limited)
**Pros:**
- Official data source
- Reliable and legal
- Real-time price updates

**Cons:**
- Next, H&M, Zara don't offer public APIs for affiliate partners
- Would need partnerships/API access
- Complex authentication and rate limits

**Not currently available** for the retailers you use.

### Option C: Affiliate Network APIs (Possible)
**How it works:**
- Some affiliate networks (Awin, Rakuten, etc.) provide product feeds
- These feeds include current prices and sale status
- You could fetch and match products automatically

**Pros:**
- Semi-automatic updates
- Legal and within affiliate terms
- Provides accurate sale data

**Cons:**
- Requires checking if your retailers offer data feeds
- Need to match products between feed and your curation
- Requires backend/scheduled script

**Could be explored** if you join affiliate networks with data feed access.

### Option D: Manual with Notifications (Practical)
**How it works:**
- Subscribe to retailer email newsletters
- Get notified when sales start
- Update prices manually (15-30 minutes per sale event)

**Pros:**
- Simple, no technical complexity
- You control quality and accuracy
- Works immediately

**Cons:**
- Manual effort required
- Slight delay in showing sale prices

**Recommended** for your current stage.

---

## 📋 Recommended Workflow (Current Stage)

### Weekly Price Check
1. **Monday morning**: Check retailer websites for sales
2. **Update products**: Add `salePrice` to on-sale items
3. **Commit changes**: Push to GitHub
4. **Deploy**: Site updates automatically

### Sale Notification Strategy
- Subscribe to Next.ro, H&M, Zara, Mango, Mohito newsletters
- Follow their social media for flash sales
- Check websites during major sale periods:
  - Black Friday (November)
  - Winter Sales (January-February)
  - Summer Sales (June-July)
  - Mid-season sales (April, October)

### Time Investment
- **Regular sales** (monthly): 15-30 minutes to update
- **Major sales** (4-5 times/year): 1-2 hours to update all products

---

## 🎨 Customization Options

### Change Sale Badge Color
In `index.html`, find `.sale-badge` and update:
```css
.sale-badge {
  background: var(--warmred);  /* Change to any color */
}
```

### Change Sale Badge Text
In `app.js`, find `saleBadge` and update:
```javascript
const saleBadge = isOnSale ? `<div class="sale-badge">-33%</div>` : '';
// Or
const saleBadge = isOnSale ? `<div class="sale-badge">Reducere</div>` : '';
```

### Add Percentage Discount Calculation
```javascript
// In renderGrid function, after isOnSale check:
const discount = isOnSale 
  ? Math.round((1 - parsePrice(p.salePrice) / parsePrice(p.price)) * 100)
  : 0;
const saleBadge = isOnSale ? `<div class="sale-badge">-${discount}%</div>` : '';
```

---

## 📊 Analytics Ideas (Future)

Track which sale products get the most clicks:
```javascript
// Add click tracking to sale items
onClick="trackSaleClick('${p.name}', '${p.salePrice}')"
```

This helps you understand:
- Which retailers' sales drive most traffic
- What discount percentages work best
- Which product categories are most price-sensitive

---

## ✅ Testing Checklist

After adding sale prices:
- [ ] Visit Light Spring page
- [ ] Find the product with `salePrice`
- [ ] Verify "SALE" badge appears on product image
- [ ] Verify original price is strikethrough
- [ ] Verify sale price is in red and bold
- [ ] Select "Price: Low to High" sort
- [ ] Verify sale items appear in correct position based on sale price
- [ ] Remove `salePrice` and verify product returns to normal display

---

## 🚀 Quick Reference

### Add Sale Price
```javascript
salePrice: '199 RON',  // Add this line
```

### Remove Sale Price
```javascript
// salePrice: '199 RON',  // Comment out or delete this line
```

### Bulk Find & Replace (for major sales)
Use your code editor's find/replace to add sale prices to multiple items at once.

---

## ❓ FAQ

**Q: Can I have different currencies for regular and sale price?**
A: No, keep both in RON for consistency.

**Q: What if I forget to remove a salePrice after the sale ends?**
A: Users will still see the sale price. Set a reminder to check and update.

**Q: Can I show "Was 298 RON, Now 199 RON" text?**
A: The current design shows this visually (strikethrough + red price). You could modify the HTML to add text.

**Q: How do I know which products are on sale on retailer sites?**
A: Visit the retailer, look for red "Sale" tags or "Reduceri" sections. Check individual product pages for your curated items.

**Q: Can I automate checking if products are still in stock?**
A: Not without an API. Manual checking or user reports are current options.

---

## 💡 Summary

**Current System:** Manual updates (simple, immediate, works well)
**Future Option:** Affiliate network APIs (if available and you grow)
**Not Recommended:** Web scraping (complex, fragile, possibly illegal)

For your current stage, **manual updates during sale periods** (15-30 min every few weeks) is the most practical and reliable approach.
