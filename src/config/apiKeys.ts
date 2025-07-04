
// API Configuration
// Replace the placeholder values with your actual API keys

export const API_KEYS = {
  // OpenAI API Key - Get from: https://platform.openai.com/api-keys
  OPENAI_API_KEY: 'your_openai_api_key_here',
  
  // Anthropic API Key - Get from: https://console.anthropic.com/
  ANTHROPIC_API_KEY: 'your_anthropic_api_key_here',
  
  // Google Gemini API Key - Get from: https://aistudio.google.com/app/apikey
  GOOGLE_API_KEY: 'your_google_api_key_here',
  
  // Stripe API Keys - Get from: https://dashboard.stripe.com/apikeys
  STRIPE_PUBLISHABLE_KEY: 'your_stripe_publishable_key_here',
  STRIPE_SECRET_KEY: 'your_stripe_secret_key_here',
  
  // SendGrid API Key - Get from: https://app.sendgrid.com/settings/api_keys
  SENDGRID_API_KEY: 'your_sendgrid_api_key_here',
  
  // Twilio API Keys - Get from: https://console.twilio.com/
  TWILIO_ACCOUNT_SID: 'your_twilio_account_sid_here',
  TWILIO_AUTH_TOKEN: 'your_twilio_auth_token_here',
  
  // Add more API keys as needed
  // CUSTOM_API_KEY: 'your_custom_api_key_here',
};

// Helper function to get API key with validation
export const getApiKey = (keyName: keyof typeof API_KEYS): string => {
  const key = API_KEYS[keyName];
  if (!key || key.includes('your_') || key.includes('_here')) {
    console.warn(`API key '${keyName}' is not configured properly`);
    return '';
  }
  return key;
};
