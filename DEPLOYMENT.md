# 🚀 Deployment Guide

This guide covers different ways to deploy your Angular Todo List application.

## 📋 Prerequisites

- Node.js 18+ installed
- MongoDB instance (local or cloud)
- Git repository set up

## 🌐 Frontend Deployment

### Netlify (Recommended for Frontend)

1. **Build the application**
   ```bash
   ng build --configuration production
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `ng build --configuration production`
   - Set publish directory: `dist/angular-todo-list`
   - Deploy!

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev angular-cli-ghpages
   ```

2. **Build and deploy**
   ```bash
   ng build --configuration production --base-href "https://yourusername.github.io/angular-todo-list/"
   npx angular-cli-ghpages --dir=dist/angular-todo-list
   ```

## 🖥️ Backend Deployment

### Heroku

1. **Create Heroku app**
   ```bash
   cd backend
   heroku create your-app-name
   ```

2. **Set environment variables**
   ```bash
   heroku config:set MONGODB_URI=your_mongodb_connection_string
   heroku config:set NODE_ENV=production
   ```

3. **Deploy**
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

### Railway

1. **Connect GitHub repository to Railway**
2. **Set environment variables in Railway dashboard**
3. **Deploy automatically on git push**

### Digital Ocean App Platform

1. **Create new app from GitHub**
2. **Configure build and run commands**
3. **Set environment variables**
4. **Deploy**

## 🗄️ Database Options

### MongoDB Atlas (Cloud)

1. **Create cluster at [MongoDB Atlas](https://cloud.mongodb.com/)**
2. **Get connection string**
3. **Update MONGODB_URI in your deployment platform**

### Local MongoDB

- Only suitable for development
- Not recommended for production

## 🔧 Environment Configuration

### Production Environment Variables

```env
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todolist
```

### Frontend API Configuration

Update your Angular service to point to production API:

```typescript
// In your service file
private apiUrl = environment.production 
  ? 'https://your-backend-url.com/api' 
  : 'http://localhost:3000/api';
```

## 📊 Monitoring

Consider adding:
- **Error tracking**: Sentry
- **Analytics**: Google Analytics
- **Performance monitoring**: New Relic
- **Uptime monitoring**: UptimeRobot

## 🔐 Security Checklist

- [ ] Environment variables secured
- [ ] CORS properly configured
- [ ] Rate limiting implemented
- [ ] Input validation in place
- [ ] HTTPS enabled
- [ ] Dependencies updated

## 🚀 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: ng build --configuration production
      
    - name: Deploy to Netlify
      uses: netlify/actions/cli@master
      with:
        args: deploy --dir=dist/angular-todo-list --prod
      env:
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
```

## 📞 Support

If you encounter issues during deployment, please:
1. Check the logs
2. Verify environment variables
3. Ensure all dependencies are installed
4. Open an issue with detailed error information
