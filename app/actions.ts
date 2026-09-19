// Staging stub — no server action so the static export builds for cPanel preview.
// Restore 'use server' and the full implementation before production deployment.

export type ContactResult = { success: true } | { success: false; error: string };

export async function submitContact(_formData: FormData): Promise<ContactResult> {
  return { success: true };
}
