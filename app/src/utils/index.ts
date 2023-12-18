export function setLocal({ key, val }: { key: string; val: string }) {
  localStorage.setItem(key, val)
}

export function getLocal({ key }: { key: string }) {
  localStorage.getItem(key)
}

export function removeLocal({ key }: { key: string }) {
  localStorage.removeItem(key)
}
