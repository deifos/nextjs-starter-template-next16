import { getTranslations, getLocale } from 'next-intl/server'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { Camera, MapPin, FileText, Users } from 'lucide-react'

export default async function LandingPage() {
  const t = await getTranslations('Landing')
  const locale = await getLocale()

  const features = [
    {
      icon: Camera,
      title: t('features.photos.title'),
      description: t('features.photos.description'),
    },
    {
      icon: MapPin,
      title: t('features.zones.title'),
      description: t('features.zones.description'),
    },
    {
      icon: FileText,
      title: t('features.notes.title'),
      description: t('features.notes.description'),
    },
    {
      icon: Users,
      title: t('features.collaboration.title'),
      description: t('features.collaboration.description'),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-zinc-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">R</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              <span className="rounded bg-black px-1 text-white dark:bg-white dark:text-black">reno</span>
              sync
            </span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              {t('nav.features')}
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              {t('nav.pricing')}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher currentLocale={locale} />
            <Link href="/auth/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              {t('nav.signIn')}
            </Link>
            <Button asChild>
              <Link href="/dashboard">{t('nav.getStarted')}</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
              <span className="text-sm font-medium text-primary">{t('hero.badge')}</span>
            </div>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl dark:text-white">
              {t('hero.title')}{' '}
              <span className="text-primary">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              {t('hero.description')}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/dashboard">{t('hero.cta')}</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                {t('hero.ctaSecondary')}
              </Button>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="mt-16 sm:mt-24">
            <div className="relative mx-auto max-w-5xl">
              <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100 shadow-2xl ring-1 ring-gray-200 dark:bg-zinc-800 dark:ring-zinc-700">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                      <Camera className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              {t('features.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              {t('features.description')}
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-primary/50 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-primary/50"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 py-20 sm:px-12 sm:py-28 dark:bg-zinc-800">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
            <div className="relative text-center">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t('cta.title')}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
                {t('cta.description')}
              </p>
              <div className="mt-10">
                <Button size="lg" asChild>
                  <Link href="/dashboard">{t('cta.button')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
                <span className="text-xs font-bold text-primary-foreground">R</span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} {t('footer.copyright')}
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {t('footer.tagline')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
