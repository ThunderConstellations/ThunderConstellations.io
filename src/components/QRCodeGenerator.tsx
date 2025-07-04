
import React, { useState } from 'react';
import { QrCode, Download, Share2, Copy, Check } from 'lucide-react';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const generateQRCode = () => {
    if (!text.trim()) return;
    
    // Using QR Server API for free QR code generation
    const encodedText = encodeURIComponent(text);
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodedText}`;
    setQrCodeUrl(qrUrl);
  };

  const downloadQRCode = () => {
    if (!qrCodeUrl) return;
    
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyToClipboard = async () => {
    if (!qrCodeUrl) return;
    
    try {
      await navigator.clipboard.writeText(qrCodeUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const presetTexts = [
    '19austinwood96@gmail.com',
    'https://github.com/ThunderConstellations',
    'LinkedIn: austin-wood-a1b2c3',
    'Healthcare Professional - Austin Wood'
  ];

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-cosmic-gold mb-4">QR Code Generator</h2>
        <p className="text-cosmic-starlight/80">
          Generate QR codes for easy sharing of contact information, links, and more.
        </p>
      </div>

      <div className="glass-morphism rounded-xl p-8 space-y-6">
        {/* Input Section */}
        <div>
          <label htmlFor="qr-text" className="block text-cosmic-starlight font-medium mb-2">
            Enter text or URL to encode
          </label>
          <textarea
            id="qr-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter email, URL, phone number, or any text..."
            className="w-full px-4 py-3 bg-cosmic-dark/40 border border-cosmic-gold/30 rounded-lg
                     text-cosmic-starlight placeholder-cosmic-starlight/50
                     focus:outline-none focus:border-cosmic-gold focus:ring-2 focus:ring-cosmic-gold/20
                     transition-all duration-300 resize-none"
            rows={3}
          />
        </div>

        {/* Preset Buttons */}
        <div>
          <p className="text-cosmic-starlight/70 text-sm mb-3">Quick presets:</p>
          <div className="flex flex-wrap gap-2">
            {presetTexts.map((preset, index) => (
              <button
                key={index}
                onClick={() => setText(preset)}
                className="px-3 py-1 bg-cosmic-gold/20 text-cosmic-gold text-sm rounded-full
                         border border-cosmic-gold/30 hover:bg-cosmic-gold/30 transition-colors"
              >
                {preset.length > 30 ? preset.substring(0, 30) + '...' : preset}
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={generateQRCode}
          disabled={!text.trim()}
          className="lightning-btn w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <QrCode className="w-5 h-5" />
          Generate QR Code
        </button>

        {/* QR Code Display */}
        {qrCodeUrl && (
          <div className="text-center space-y-4 animate-fade-in">
            <div className="bg-white p-4 rounded-lg inline-block">
              <img src={qrCodeUrl} alt="Generated QR Code" className="w-64 h-64" />
            </div>
            
            <div className="flex justify-center gap-3">
              <button
                onClick={downloadQRCode}
                className="flex items-center gap-2 px-4 py-2 bg-cosmic-gold/20 text-cosmic-gold
                         border border-cosmic-gold/30 rounded-lg hover:bg-cosmic-gold/30 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
              
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-4 py-2 bg-cosmic-gold/20 text-cosmic-gold
                         border border-cosmic-gold/30 rounded-lg hover:bg-cosmic-gold/30 transition-colors"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied!' : 'Copy URL'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
