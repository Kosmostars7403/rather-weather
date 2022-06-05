import {of, tap} from "rxjs";

export function CacheRequest(prefix: string, cacheTime = 24 * 60 * 60 * 1000) {
  return (target: Object, propertyName: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>): PropertyDescriptor => {
    const original = descriptor.value

    descriptor.value = function(...args) {
      const cachedValue = localStorage.getItem('four-days')
      const cacheExpireDate = localStorage.getItem('cache-expired')

      if (cachedValue && cacheExpireDate && !(new Date(cacheExpireDate) < new Date)) return of(JSON.parse(cachedValue))

      return original?.apply(this, args).pipe(
        tap(val => {
          localStorage.setItem('four-days', JSON.stringify(val))
          localStorage.setItem('cache-expired', new Date(new Date().getTime() + cacheTime).toString())
        })
      )
    }

    return descriptor
  }
}
