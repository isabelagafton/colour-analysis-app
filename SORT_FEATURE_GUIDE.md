# Sort by Recently Added & Price Feature

## Overview
Users can now sort products on each shop page by:
- **Recently Added** - See the newest additions first
- **Price: Low to High** - Find the most affordable options

## How It Works

### For Users:
1. Navigate to any season's shop page (e.g., Light Spring, Cool Summer)
2. Look for the **sort dropdown** in the filter bar (between category chips and the count label)
3. Select from three options:
   - **Default order**: Products appear in their original order
   - **Recently added**: Products sorted with the newest additions first
   - **Price: Low to High**: Products sorted from cheapest to most expensive

### For You (Adding New Products):
When you add new products to the `PRODUCTS` array in `app.js`, simply include a `dateAdded` field:

```javascript
{
  season: 'lightSpring',
  name: 'New Product Name',
  retailer: 'next',
  category: 'top',
  shade: 'coral',
  price: '299 LEI',
  url: 'https://...',
  confidence: 'high',
  img: 'https://...',
  dateAdded: '2025-01-16'  // ← Add this field in YYYY-MM-DD format
}
```

**Important**: Always use the format `YYYY-MM-DD` (e.g., `2025-01-16`) for dates.

## Current Product Dates

All existing products have been assigned dates ranging from:
- **December 10, 2024** (oldest)
- **January 15, 2025** (most recent)

The dates were distributed to simulate products being added over time, with a bias toward more recent dates.

## Technical Details

### Date Distribution
- Products are spread across ~36 days
- Distribution uses a power curve (0.7) to create more "recent" products
- Products without a `dateAdded` field default to January 1, 2024 (will appear as oldest)

### Price Parsing
- Extracts numeric values from price strings (e.g., "253 RON" → 253, "94.99 RON" → 94.99)
- Handles both integer prices (e.g., "142 RON") and decimal prices (e.g., "139.99 RON")
- Uses regex pattern `/[\d.]+/` to extract the first numeric value
- All prices are in RON (Romanian Leu)

### Sorting Logic
- **Recently added**: Products sorted by `dateAdded` in descending order (newest first)
- **Price: Low to High**: Products sorted by numeric price value in ascending order (cheapest first)
- **Default**: Products appear in their original array order
- Dates are parsed as JavaScript Date objects for proper chronological sorting
- The sort state resets to "Default order" when switching between seasons

### UI/UX
- Sort dropdown styled to match existing filter chips
- Dropdown has custom arrow indicator
- Focus state shows coral outline for accessibility
- Sort preference is maintained while filtering by category or color shade
- Sort resets when navigating to a different season

## Future Enhancements

You could add:
1. **"New" badge** on products added in the last 7 days
2. **Date display** showing when each product was added (optional)
3. **Additional sort options** like:
   - Price: High to Low (most expensive first)
   - Retailer name (alphabetical)
   - Category (group tops, dresses, etc.)
4. **Local storage** to remember user's sort preference
5. **Multiple currency handling** if you add international retailers

## Example Workflows

### Scenario 1: You add 5 new Light Spring products today

1. Add the products to the `PRODUCTS` array with today's date:
   ```javascript
   {season:'lightSpring', name:'New Top', ..., dateAdded:'2025-01-16'},
   {season:'lightSpring', name:'New Dress', ..., dateAdded:'2025-01-16'},
   // etc.
   ```

2. User visits Light Spring page and sees 35 total products
3. User clicks sort dropdown and selects "Recently added"
4. Your 5 new products appear at the top of the grid
5. Existing 30 products appear below in chronological order

### Scenario 2: User is shopping on a budget

1. User visits any season page (e.g., Soft Autumn)
2. Clicks sort dropdown and selects "Price: Low to High"
3. Products re-order from cheapest (e.g., 59 RON) to most expensive (e.g., 737 LEI)
4. User can quickly find affordable options in their color palette
5. Sorting works with color/category filters (e.g., "show only coral tops, sorted by price")

## Testing

To verify the feature works:

### Test 1: Recently Added Sort
1. Open any shop page (e.g., `#shop/lightSpring`)
2. Note the current product order
3. Change the dropdown to "Recently added"
4. Verify products re-order with newest dates first (Jan 2025 at top)

### Test 2: Price Sort
1. Stay on the same shop page
2. Change dropdown to "Price: Low to High"
3. Verify products re-order from cheapest to most expensive
4. Check that both "LEI" and "RON" prices sort correctly together
5. Check that decimal prices (94.99) sort correctly with integer prices (95)

### Test 3: Filter Compatibility
1. Select "Price: Low to High" from dropdown
2. Filter by a specific category (e.g., "Dresses")
3. Verify dresses remain sorted by price
4. Select a color shade filter
5. Verify products matching that shade remain price-sorted

### Test 4: Season Switching
1. With "Price: Low to High" selected
2. Switch to another season
3. Verify dropdown resets to "Default order"

## Notes

- The sort happens client-side (no server required)
- Performance is fine up to ~1000 products per season
- All products must have valid date strings or they'll default to oldest
- All prices are displayed in RON (Romanian Leu)
- Price parsing handles both decimal (94.99) and integer (253) formats
- Currency symbol is stripped for comparison - only numeric values are sorted
