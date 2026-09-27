export function trackEvent(eventName: string) {
  if (typeof window !== "undefined") {
    console.info(`Event: ${eventName}`);
  }
  return true;
}
