import React, { useState } from 'react';
import { MessageSquare, Camera, X, Loader2, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import html2canvas from 'html2canvas';

export default function FeedbackButton() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [comment, setComment] = useState('');
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [includeScreenshot, setIncludeScreenshot] = useState(true);
  const [isCapturing, setIsCapturing] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const captureScreen = async () => {
    setIsCapturing(true);
    setScreenshot(null);
    setIncludeScreenshot(true);
    setError(null);

    // Short timeout to let the modal open state render, but we exclude the modal overlay from the screen capture
    setTimeout(() => {
      const rootElement = document.body;
      html2canvas(rootElement, {
        useCORS: true,
        allowTaint: true,
        logging: false,
        ignoreElements: (element) => {
          // Exclude the feedback modal overlay itself
          return (
            element.classList.contains('feedback-modal-overlay') ||
            element.getAttribute('id') === 'feedback-modal-overlay'
          );
        },
      })
        .then((canvas) => {
          // Compress screenshot to keep network payloads lightweight
          const base64 = canvas.toDataURL('image/jpeg', 0.6);
          setScreenshot(base64);
          setIsCapturing(false);
        })
        .catch((err) => {
          console.error('Screenshot capture failed:', err);
          setIsCapturing(false);
          // Don't block the user, just let them submit without screenshot
        });
    }, 150);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setComment('');
    setScreenshot(null);
    setIsSuccess(false);
    setError(null);
    captureScreen();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setIsSending(true);
    setError(null);

    const payload = {
      pageUrl: window.location.href,
      comment: comment,
      screenshotBase64: includeScreenshot ? screenshot : null,
    };

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzwMiIXvrTQR4Of5dAwkc_sbC8gMrd7rtxX9wrG6xrzsd3xZcIUk_g7c_oEKLqeVp-l/exec',
        {
          method: 'POST',
          mode: 'no-cors', // Apps Script web app redirect behavior requires no-cors or redirect handling
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      // Note: with no-cors, fetch returns an opaque response (type: "opaque", status: 0)
      // even if successful. We treat all completed requests as successful in this mode.
      setIsSuccess(true);
      setIsSending(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    } catch (err) {
      console.error('Submission failed:', err);
      setError(t('feedbackError'));
      setIsSending(false);
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="group flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold
                   bg-slate-800/40 hover:bg-slate-700/50 active:bg-slate-700/70
                   border border-white/10 hover:border-white/20
                   text-slate-300 hover:text-white
                   transition-all duration-300 ease-out hover:scale-[1.02]
                   backdrop-blur-md cursor-pointer select-none"
      >
        <MessageSquare className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors shrink-0" />
        <span className="font-sans leading-tight">
          {t('feedbackBtn')}
        </span>
      </button>

      {isOpen && (
        <div
          id="feedback-modal-overlay"
          className="feedback-modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
          onClick={handleClose}
        >
          <div
            className="w-full max-w-lg bg-slate-900/95 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-5 border-b border-white/10">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <MessageSquare className="w-4.5 h-4.5 text-blue-400" />
                {t('feedbackTitle')}
              </h3>
              <button
                onClick={handleClose}
                className="p-1 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            {isSuccess ? (
              <div className="p-8 flex flex-col items-center justify-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">{t('feedbackSuccess')}</h4>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
                {/* Textarea */}
                <div className="flex flex-col gap-1.5">
                  <textarea
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder={t('feedbackCommentPlaceholder')}
                    className="w-full h-32 p-3 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none font-sans"
                    disabled={isSending}
                  />
                </div>

                {/* Screenshot section */}
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col gap-3">
                  <label className="flex items-center gap-2.5 text-xs text-slate-300 font-semibold cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={includeScreenshot}
                      disabled={isSending || isCapturing || !screenshot}
                      onChange={(e) => setIncludeScreenshot(e.target.checked)}
                      className="w-4 h-4 rounded border-white/15 bg-slate-950 text-blue-500 focus:ring-blue-500"
                    />
                    <span className="flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5 text-slate-400" />
                      {t('feedbackScreenshotLabel')}
                    </span>
                  </label>

                  {/* Screenshot state indicator */}
                  {isCapturing && (
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-400" />
                      <span>{t('feedbackGeneratingScreenshot')}</span>
                    </div>
                  )}

                  {screenshot && includeScreenshot && (
                    <div className="relative w-full max-h-36 rounded-lg overflow-hidden border border-white/10 bg-slate-950/40">
                      <img
                        src={screenshot}
                        alt="Screenshot Preview"
                        className="w-full h-full object-contain max-h-36 opacity-80"
                      />
                    </div>
                  )}
                </div>

                {/* Errors display */}
                {error && <div className="text-xs text-rose-400 font-semibold">{error}</div>}

                {/* Modal Footer actions */}
                <div className="flex justify-end gap-3 pt-2 border-t border-white/5">
                  <button
                    type="button"
                    onClick={handleClose}
                    disabled={isSending}
                    className="px-4 py-2 border border-white/10 hover:bg-white/5 text-slate-300 hover:text-white text-xs font-bold rounded-lg transition-all cursor-pointer"
                  >
                    {t('feedbackCancel')}
                  </button>
                  <button
                    type="submit"
                    disabled={isSending || isCapturing}
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-500 disabled:bg-white/5 disabled:text-slate-500 disabled:border-transparent text-white text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-blue-600/10"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>{t('feedbackSending')}</span>
                      </>
                    ) : (
                      <span>{t('feedbackSubmit')}</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
