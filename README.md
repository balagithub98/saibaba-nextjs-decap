# Temple Website with DecapCMS

A beautiful, responsive temple website built with Next.js and DecapCMS, designed for easy content management by non-technical users.

## Features

- **Four Static Pages**: Home, About, Events, Contact
- **Daily Content Management**: Easy-to-update homepage with hero images, function details, and special messages
- **Event Management**: Add and manage temple events and programs
- **Responsive Design**: Works perfectly on all devices
- **SEO Optimized**: Built for search engine visibility
- **Fast Loading**: Static site generation for optimal performance

## Content Management

The website uses DecapCMS (formerly Netlify CMS) for content management, providing a user-friendly interface for non-technical users to:

- Update daily function information (name, date, time, special messages)
- Change hero images
- Manage events and programs
- Edit static page content
- Add contact information

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Development
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

## Deployment to Netlify

### Option 1: Connect GitHub Repository
1. Push your code to a GitHub repository
2. Connect the repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `out`
5. Enable Netlify Identity for CMS access

### Option 2: Manual Deployment
1. Run `npm run build`
2. Upload the `out` folder to Netlify

## CMS Configuration

The CMS is configured in `public/admin/config.yml` with the following collections:

- **Homepage Content**: Daily function updates
- **Static Pages**: About, Events, Contact pages
- **Events**: Temple events and programs

## Content Structure

```
content/
├── homepage/          # Daily homepage content
├── pages/            # Static pages (about, events, contact)
└── events/           # Temple events and programs
```

## Admin Access

After deployment, access the CMS at: `https://your-domain.com/admin`

## Customization

- **Styling**: Modify `app/globals.css` and `tailwind.config.js`
- **Layout**: Update `app/layout.tsx`
- **Content Fields**: Edit `public/admin/config.yml`
- **Pages**: Modify files in `app/` directory

## Support

For technical support or customization requests, please contact your developer.

## License

This project is created for temple use. All rights reserved.
