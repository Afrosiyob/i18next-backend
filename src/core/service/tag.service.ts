export function findKey(key: string, data: object) {
  if (data[key as keyof typeof data]) {
    return true;
  } else {
    return null;
  }
}
