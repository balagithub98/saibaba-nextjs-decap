# 🕉️ Temple Website - DecapCMS Setup Guide

## 📋 Prerequisites (Free Tier Compatible)

1. **GitHub Repository**: Your code is already on GitHub ✅
2. **Netlify Free Account**: Perfect for temple websites
3. **GitHub OAuth App**: Free to create
4. **No Credit Card Required**: Everything works on free tier!

## 🚀 Step-by-Step Setup

### 1. Deploy to Netlify (Free Tier)

1. **Go to [Netlify](https://netlify.com)**
2. **Sign up with GitHub** (free account)
3. **Click "New site from Git"**
4. **Connect your GitHub repository**: `balagithub98/saibaba-nextjs-decap`
5. **Build settings** (free tier supports all of this):
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: `18` (in Environment variables)
6. **Deploy!** (takes 2-3 minutes)

### 2. Enable Netlify Identity (Free Tier - No OAuth Needed!)

1. **In your Netlify dashboard**:
   - Go to **Site settings** → **Identity**
   - Click **Enable Identity** (free tier includes this!)
   - Go to **Registration** → **Open registration** (for now)
   - **Skip GitHub OAuth** - we'll use Git Gateway instead!

### 3. Enable Git Gateway (No Credentials Required!)

1. **In your Netlify dashboard**:
   - Go to **Site settings** → **Identity**
   - Scroll down to **Git Gateway**
   - Click **Enable Git Gateway**
   - **That's it!** No GitHub OAuth setup needed!

**Note**: Git Gateway uses Netlify's built-in authentication - no external credentials required!

### 4. Test the Admin Panel (No Credentials Needed!)

1. **Visit your site**: `https://your-site-name.netlify.app`
2. **Go to admin**: `https://your-site-name.netlify.app/admin`
3. **Sign up/Login** with email (no GitHub OAuth needed!)
4. **Start managing content!**

## 📝 Content Management Features

### 🏠 Homepage Content
- **Hero Image**: Upload temple images
- **Function Details**: Daily temple functions
- **Special Messages**: Important announcements

### 📄 Static Pages
- **About Page**: Temple information
- **Events Page**: Event listings
- **Contact Page**: Contact information

### 📅 Events Management
- **Create Events**: Add new temple events
- **Event Details**: Date, time, description
- **Featured Images**: Event photos

## 🔧 Troubleshooting

### Common Issues:

1. **"Failed to load" error**:
   - Check GitHub repository permissions
   - Verify Netlify Identity is enabled
   - Ensure OAuth app is configured correctly

2. **Authentication issues**:
   - Clear browser cache
   - Check OAuth callback URL
   - Verify GitHub app settings

3. **Content not saving**:
   - Check GitHub repository access
   - Verify branch permissions
   - Check Netlify build logs

## 🔐 Git Gateway Benefits (No OAuth Required!)

### ✅ **Why Git Gateway is Perfect:**
- **No GitHub OAuth setup** - Skip the complex credential process
- **No paid subscriptions** - Works with free Netlify tier
- **Simple email authentication** - Just sign up with email
- **Automatic Git commits** - Changes saved to GitHub automatically
- **Built-in security** - Netlify handles all authentication
- **Easy for non-technical users** - No external app setup

### ✅ **What's Included (Free):**
- **100GB bandwidth/month** - Perfect for temple website
- **300 build minutes/month** - More than enough
- **1,000 active users** - Great for temple community
- **Unlimited sites** - Can host multiple projects
- **Custom domains** - Use your own domain name
- **SSL certificates** - Automatic HTTPS
- **Form handling** - Contact forms work
- **Identity & Authentication** - DecapCMS works perfectly
- **Git Gateway** - No OAuth credentials needed!

### 📊 **Perfect for Temple Websites:**
- **Low traffic** - Most temple sites are under 100GB/month
- **Simple content** - Text and images are lightweight
- **Community focused** - 1,000 users is plenty
- **Cost effective** - $0/month hosting!

## 🎯 Next Steps

1. **Deploy to Netlify** (follow steps above)
2. **Set up authentication** (GitHub OAuth)
3. **Test admin panel** functionality
4. **Train your client** on content management
5. **Go live!** 🚀

## 📞 Support

If you encounter issues:
1. Check Netlify build logs
2. Verify GitHub repository access
3. Test authentication flow
4. Contact support if needed

---

**Your temple website is ready for content management!** 🕉️✨
