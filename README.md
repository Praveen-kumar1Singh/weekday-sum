# 📆 Weekday Sum

This project processes a dictionary of date-value pairs and returns a summary of totals for each weekday. If a weekday is missing from the input, it is filled in by averaging its neighboring weekdays' values.

---

## ✅ Features

- Converts ISO date strings (`YYYY-MM-DD`) to weekday names (`Mon`, `Tue`, etc.)
- Sums values for each weekday
- Handles missing weekdays by averaging the values of the previous and next available weekdays
- Includes unit tests with Jest

---

## 📦 Example

### Input:

```js
{
  '2020-01-01': 6,  // Wed
  '2020-01-04': 12, // Sat
  '2020-01-05': 14, // Sun
  '2020-01-06': 2,  // Mon
  '2020-01-07': 4   // Tue
}
