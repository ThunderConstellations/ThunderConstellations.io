
# Austin Wood - Professional Portfolio

A modern, interactive portfolio website showcasing Austin Wood's professional background in healthcare coordination, technical support, and team leadership. Features an AI-powered chat assistant for dynamic interaction with visitors.

## 🌟 Features

- **Interactive AI Chat Assistant** - Powered by OpenRouter's Deepseek R1 model
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Professional Resume Downloads** - Tailored resumes for different industries
- **Skills & Experience Visualizations** - Interactive charts and data displays
- **Modern Tech Stack** - Built with React, TypeScript, and Tailwind CSS

## 🚀 Live Demo

Visit the live portfolio: [https://yourusername.github.io/austin-wood-portfolio](https://yourusername.github.io/austin-wood-portfolio)

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Charts**: Recharts
- **Icons**: Lucide React
- **AI Integration**: OpenRouter API (Deepseek R1 model)
- **Deployment**: GitHub Pages

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ and npm
- Git
- GitHub account

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/austin-wood-portfolio.git
cd austin-wood-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:8080`

## 🔐 API Keys Setup

The AI chat feature requires an OpenRouter API key for intelligent conversations.

### Getting Your OpenRouter API Key

1. Visit [OpenRouter](https://openrouter.ai/keys)
2. Sign up for a free account
3. Generate a new API key
4. Copy the key (starts with `sk-or-v1-...`)

### Secure API Key Configuration

**IMPORTANT**: Never commit API keys to your repository. This project uses client-side storage for API keys.

#### For Users (Recommended Approach)
The application prompts users to enter their own OpenRouter API key when they first use the chat feature. The key is:
- Stored locally in the user's browser (`localStorage`)
- Never sent to any server except OpenRouter directly
- Not exposed in the codebase or GitHub repository

#### For Development/Demo Purposes
If you want to provide a demo key for testing:

1. Create a `.env.local` file in your project root (this file is gitignored)
2. Add your API key:
```
VITE_DEMO_OPENROUTER_KEY=sk-or-v1-your-key-here
```

**Note**: Environment variables in Vite must be prefixed with `VITE_` to be accessible in the browser. However, this means they are visible in the built application, so only use this for development/demo purposes.

## 🚀 Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. **Fork or create the repository** on GitHub

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "GitHub Actions" as the source

3. **Set up the deployment workflow**:
   Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Setup Pages
      uses: actions/configure-pages@v4
      
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v3
      with:
        path: './dist'
        
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    permissions:
      pages: write
      id-token: write
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4. **Configure the base URL**:
   Update `vite.config.ts`:

```typescript
export default defineConfig(({ mode }) => ({
  base: '/your-repository-name/',
  // ... rest of config
}));
```

5. **Push your changes**:
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### Option 2: Manual Deployment

1. **Build the project**:
```bash
npm run build
```

2. **Deploy to gh-pages branch**:
```bash
npm install -g gh-pages
gh-pages -d dist
```

## 🔒 Security Best Practices

### API Key Security
- ✅ API keys are stored in user's browser only
- ✅ Keys never committed to repository
- ✅ Direct communication with OpenRouter API only
- ✅ No server-side storage of sensitive data

### Content Security
- All user inputs are sanitized
- No server-side code execution
- Static site deployment (GitHub Pages)

## 🎨 Customization

### Updating Personal Information
Edit the following files to customize for your own use:

- `src/services/aiIntelligence.ts` - Update the system prompt with your information
- `src/components/chat/ChatWelcome.tsx` - Update welcome messages
- `src/pages/Home.tsx` - Update personal details and contact information

### Styling
- Colors and themes: `tailwind.config.ts`
- Custom CSS: `src/index.css`
- Component styles: Individual component files

## 📱 Mobile Optimization

The portfolio is fully responsive with special optimizations for mobile devices:
- Touch-friendly interface
- Keyboard-aware chat interface
- Optimized loading and performance
- Mobile-specific animations and interactions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Austin Wood**
- Email: austinwood2024@gmail.com
- Phone: (541) 520-8949
- LinkedIn: [linkedin.com/in/austin-wood-healthcare](https://linkedin.com/in/austin-wood-healthcare)
- Location: Chicago, IL

## 🐛 Troubleshooting

### Common Issues

**Chat not working**: Ensure you have a valid OpenRouter API key entered in the chat interface.

**Build failures**: Check that all dependencies are installed (`npm ci`) and Node.js version is 18+.

**Deployment issues**: Verify the base URL in `vite.config.ts` matches your repository name.

**Styling issues**: Clear browser cache and ensure Tailwind CSS is properly configured.

### Getting Help

If you encounter issues:
1. Check the browser console for error messages
2. Verify all dependencies are up to date
3. Ensure API keys are properly configured
4. Review the GitHub Actions logs for deployment issues

## 🎯 Roadmap

- [ ] Add more AI model options
- [ ] Implement dark/light theme toggle
- [ ] Add blog functionality
- [ ] Enhanced mobile animations
- [ ] Multi-language support

---

Built with ❤️ using React, TypeScript, and modern web technologies.
