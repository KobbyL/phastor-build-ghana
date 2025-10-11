# Supabase Connection Setup Guide

## ✅ Already Configured
Your Supabase connection is already configured in the code:
- **Project URL**: `https://wieakbpdacegdujkyekd.supabase.co`
- **Project ID**: `wieakbpdacegdujkyekd`
- **API Keys**: Already set in `src/integrations/supabase/client.ts`

## 🚀 Quick Setup (3 Steps)

### Step 1: Access Supabase Dashboard
1. Go to: https://supabase.com/dashboard/project/wieakbpdacegdujkyekd
2. Log in with your Supabase account

### Step 2: Run Database Setup
1. In the Supabase dashboard, click **SQL Editor** in the left sidebar
2. Click **New Query**
3. Open the file `supabase_complete_setup.sql` (in your project root)
4. Copy and paste the entire content into the SQL Editor
5. Click **Run** (or press Ctrl+Enter)
6. Wait for the script to complete (should take a few seconds)

### Step 3: Create Admin User
1. In Supabase dashboard, go to **Authentication** > **Users**
2. Click **Add user** > **Create new user**
3. Enter:
   - **Email**: `phastorgroup@gmail.com`
   - **Password**: Choose a secure password (you'll use this to login to the admin panel)
   - Check **Auto Confirm User**
4. Click **Create user**

## 🎉 That's It!

Your Supabase database is now connected and ready to use!

## 🧪 Test the Connection

Run your development server:
```bash
npm run dev
```

Then test:
1. **Frontend**: Open http://localhost:5173 - The site should load
2. **Admin Login**: Go to http://localhost:5173/admin-login
   - Email: `phastorgroup@gmail.com`
   - Password: (the one you set in Step 3)
3. **Products**: Try viewing products page - should work
4. **Orders**: Try placing an order - should save to database

## 📊 What Was Created

The setup script created:
- ✅ **Products table** - For managing concrete products
- ✅ **Orders table** - For customer orders
- ✅ **Blog tables** - For blog posts and categories
- ✅ **Quotation requests table** - For contact form submissions
- ✅ **Row Level Security (RLS)** - Proper security policies
- ✅ **Triggers** - Auto-update timestamps
- ✅ **Indexes** - For better performance

## 🔒 Security

All tables have Row Level Security (RLS) enabled:
- Public users can: View products, view published blogs, create orders
- Authenticated users can: Manage all data (admin panel)

## 📝 Database Tables

### Products
- Stores concrete product information
- Anyone can view, only admins can edit

### Orders
- Stores customer orders
- Anyone can create, only admins can view/manage

### Blog Posts
- Stores blog content
- Anyone can view published posts, admins can manage

### Quotation Requests
- Stores contact form submissions
- Anyone can submit, only admins can view

## 🆘 Troubleshooting

### "relation already exists" errors
- This is normal! It means some tables already exist
- The script uses `IF NOT EXISTS` so it's safe to run multiple times

### Can't login to admin
- Make sure you created the admin user in Step 3
- Use the exact email: `phastorgroup@gmail.com`
- Check that you confirmed the user in Supabase dashboard

### Products not showing
- Check that the products table was created
- Try running the seed script (if you have sample products)

## 🔗 Useful Links

- **Supabase Dashboard**: https://supabase.com/dashboard/project/wieakbpdacegdujkyekd
- **Table Editor**: https://supabase.com/dashboard/project/wieakbpdacegdujkyekd/editor
- **SQL Editor**: https://supabase.com/dashboard/project/wieakbpdacegdujkyekd/sql
- **Authentication**: https://supabase.com/dashboard/project/wieakbpdacegdujkyekd/auth/users

## 📧 Admin Credentials

- **Email**: phastorgroup@gmail.com
- **Password**: (Set by you in Step 3)
- **Login URL**: http://localhost:5173/admin-login (dev) or https://your-domain.com/admin-login (production)

---

Need help? The Supabase connection is already configured in your code. You just need to run the SQL setup script!



