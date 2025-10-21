# 🕉️ Temple Website - DecapCMS Setup Guide

## 📋 Prerequisites

1. **GitHub Repository**: Your code is already on GitHub
2. **Netlify Account**: For hosting and authentication
3. **GitHub OAuth App**: For DecapCMS authentication

## 🚀 Step-by-Step Setup

### 1. Deploy to Netlify

1. **Go to [Netlify](https://netlify.com)**
2. **Click "New site from Git"**
3. **Connect your GitHub repository**: `balagithub98/saibaba-nextjs-decap`
4. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: `18` (in Environment variables)

### 2. Enable Netlify Identity

1. **In your Netlify dashboard**:
   - Go to **Site settings** → **Identity**
   - Click **Enable Identity**
   - Go to **Registration** → **Open registration** (for now)
   - Go to **External providers** → **GitHub** → **Enable**

### 3. Create GitHub OAuth App

1. **Go to GitHub Settings**:
   - Go to **Developer settings** → **OAuth Apps**
   - Click **New OAuth App**

2. **Fill in the details**:
   - **Application name**: `Temple Website CMS`
   - **Homepage URL**: `https://your-site-name.netlify.app`
   - **Authorization callback URL**: `https://your-site-name.netlify.app/.netlify/identity/oauth/github/callback`

3. **Copy the credentials**:
   - Copy **Client ID** and **Client Secret**

### 4. Configure Netlify Identity with GitHub

1. **In Netlify Identity settings**:
   - Go to **External providers** → **GitHub**
   - Enter your **Client ID** and **Client Secret**
   - Save settings

### 5. Update DecapCMS Configuration

The configuration is already set up in `public/admin/config.yml`:

```yaml
backend:
  name: github
  repo: balagithub98/saibaba-nextjs-decap
  branch: master
```

### 6. Test the Admin Panel

1. **Visit your site**: `https://your-site-name.netlify.app`
2. **Go to admin**: `https://your-site-name.netlify.app/admin`
3. **Sign up/Login** with GitHub
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
