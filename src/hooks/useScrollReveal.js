import { useEffect } from 'react';

/**
 * useScrollReveal — attaches an IntersectionObserver that adds
 * the class `is-revealed` to every element matching `selector`.
 * Works globally: call once in App.jsx.
 */
export default function useScrollReveal(selector = '[data-reveal]', options = {}) {
  useEffect(() => {
    const defaults = {
      threshold: 0.12,
      rootMargin: '0px 0px -48px 0px',
    };
    const config = { ...defaults, ...options };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target); // fire once
        }
      });
    }, config);

    // Observe all matching elements (including ones added after mount)
    const attach = () => {
      document.querySelectorAll(selector).forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          observer.observe(el);
        }
      });
    };

    attach();

    // Re-scan on route changes (MutationObserver)
    const mutationObserver = new MutationObserver(attach);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
