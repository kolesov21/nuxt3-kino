export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const api = $fetch.create({
    baseURL: config.public.apiBaseURL,
    onRequest({ options }) {
      options.headers.set('X-API-KEY', config.apiKey)
    },
  })

  return {
    provide: {
      api
    }
  }
})
