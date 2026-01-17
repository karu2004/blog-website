# Quick Start Guide

## Prerequisites
- Git installed
- Node.js and npm installed
- GitHub account
- MongoDB Atlas account (free tier)

## Step 1: Upload to GitHub

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name: `blog-website`
   - Visibility: Public or Private
   - Don't initialize with README

2. **Initialize and push your code**

Open terminal in `c:\Users\bkarunya\Downloads\Blog-Website` and run:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Full-stack blog website"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/blog-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Render (Recommended)

### Backend Deployment

1. Go to https://dashboard.render.com/
2. Sign in with GitHub
3. Click **New +** → **Web Service**
4. Connect your `blog-website` repository
5. Configure:
   - **Name**: `blog-backend`
   - **Root Directory**: Leave empty
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Instance Type**: Free
6. **Add Environment Variables**:
   - `MONGO_URL` = `mongodb+srv://bhargavasaikarunya:bhargavasai@cluster0.cyae3ik.mongodb.net/`
   - `DEV_MODE` = `production`
   - `CLIENT_URL` = `https://your-frontend-url.vercel.app` (add this after frontend deployment)
7. Click **Create Web Service**
8. **Copy the URL** (e.g., `https://blog-backend-xyz.onrender.com`)

### Frontend Deployment (Vercel)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click **Add New** → **Project**
4. Import your `blog-website` repository
5. Configure:
   - **Framework Preset**: Create React App
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
6. **Add Environment Variable**:
   - Name: `REACT_APP_API_URL`
   - Value: `https://blog-backend-xyz.onrender.com` (your backend URL from step 8)
7. Click **Deploy**
8. Wait for deployment to complete
9. **Copy your frontend URL** (e.g., `https://blog-website-xyz.vercel.app`)

### Update Backend with Frontend URL

1. Go back to Render dashboard
2. Select your backend service
3. Go to **Environment**
4. Update `CLIENT_URL` with your Vercel URL
5. Save changes (service will redeploy automatically)

## Step 3: Test Your Deployed App

1. Visit your Vercel URL
2. Click **Register**
3. Create a new account
4. Login with your credentials
5. Create a blog post
6. ✅ Success! Your app is live!

## Troubleshooting

### Backend not responding
- Check Render logs for errors
- Verify MongoDB connection string is correct
- Ensure all environment variables are set

### Frontend can't connect to backend
- Verify `REACT_APP_API_URL` is set correctly in Vercel
- Check browser console for CORS errors
- Ensure `CLIENT_URL` is set in backend environment variables

### Database connection failed
- Verify MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
- Check if database user credentials are correct
- Ensure database cluster is running

## Free Tier Limits

- **Render**: 750 hours/month, sleeps after 15 min of inactivity
- **Vercel**: Unlimited deployments, 100GB bandwidth/month
- **MongoDB Atlas**: 512MB storage, shared cluster

## Next Steps

- Add custom domain
- Set up CI/CD for automatic deployments
- Add more features to your blog
- Implement image uploads
- Add comments functionality

## Support

If you encounter issues, check:
- Render logs: Dashboard → Your Service → Logs
- Vercel logs: Dashboard → Your Project → Deployments → View Logs
- Browser console for frontend errors
