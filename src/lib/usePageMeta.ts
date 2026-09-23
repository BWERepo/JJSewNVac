import { useEffect } from 'react'

const ORIGIN = 'https://jjsewnvac.businesswebexpress.com'

function setMeta(selector: string, attr: string, value: string) {
  document.querySelector(selector)?.setAttribute(attr, value)
}

/** Per-route title, description and canonical URL (the static defaults live in index.html). */
export function usePageMeta(title: string, description: string, path: string) {
  useEffect(() => {
    document.title = title
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', ORIGIN + path)
    setMeta('link[rel="canonical"]', 'href', ORIGIN + path)
  }, [title, description, path])
}
