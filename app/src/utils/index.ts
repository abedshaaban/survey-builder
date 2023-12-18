export function setLocal({ key, val }: { key: string; val: string }) {
  return localStorage.setItem(key, val)
}

export function getLocal({ key }: { key: string }) {
  return localStorage.getItem(key)
}

export function removeLocal({ key }: { key: string }) {
  return localStorage.removeItem(key)
}
