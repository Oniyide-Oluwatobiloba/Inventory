# Inventory Management System

A comprehensive web-based inventory management system built with React and TailwindCSS.

## Features

- **Dashboard**: Overview of key metrics including total products, stock value, low stock alerts
- **Product Management**: Add, edit, delete products with detailed information
- **Stock Movement**: Track inventory in/out movements
- **Categories**: Organize products by categories
- **Reports & Analytics**: Visual charts and analytics

## Pages

- `index.html` - Dashboard with statistics and recent activity
- `products.html` - Product inventory management
- `stock.html` - Stock movement tracking
- `categories.html` - Category management
- `reports.html` - Reports and analytics with charts

## Database Schema

### Product Table
- SKU, Name, Category, Supplier
- Quantity, Price, Minimum Stock Level
- Description

### Activity Table
- Type, Description, Timestamp

## Technology Stack

- React 18
- TailwindCSS
- Chart.js
- Lucide Icons
- Trickle Database