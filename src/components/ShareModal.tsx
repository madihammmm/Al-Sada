import React from "react";
import { X, Instagram, Share2 } from "lucide-react";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  productUrl: string;
}

const ShareModal = ({ isOpen, onClose, productUrl }: ShareModalProps) => {
  if (!isOpen) return null;

  const shareOnWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(productUrl)}`,
      "_blank"
    );
  };

  const shareOnInstagram = () => {
    window.open("https://www.instagram.com", "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Share</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center space-x-8">
          <button
            onClick={shareOnWhatsApp}
            className="flex flex-col items-center space-y-2"
          >
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
              <Share2 className="w-6 h-6 text-white" />
            </div>
            <span>WhatsApp</span>
          </button>
          <button
            onClick={shareOnInstagram}
            className="flex flex-col items-center space-y-2"
          >
            <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center">
              <Instagram className="w-6 h-6 text-white" />
            </div>
            <span>Instagram</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
