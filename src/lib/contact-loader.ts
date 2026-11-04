let contactModule: Promise<typeof import("@/components/ContactModal")> | undefined;

export function preloadContactModal() {
  return (contactModule ??= import("@/components/ContactModal"));
}
