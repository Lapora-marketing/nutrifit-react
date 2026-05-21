import { redirect } from 'next/navigation'

/**
 * /app → redirects to the standalone PWA app at /app.html
 *
 * The app interface is served as a self-contained HTML in /public/app.html
 * so it works perfectly offline and loads instantly.
 *
 * When users install the PWA from the landing page, the manifest's
 * `start_url` opens directly here.
 */
export default function AppPage() {
  redirect('/app.html')
}
