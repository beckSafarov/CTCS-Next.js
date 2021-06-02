export const ROOT = !process.env.NEXT_PUBLIC_VERCEL_URL
  ? process.env.NEXT_PUBLIC_ROOT
  : process.env.NEXT_PUBLIC_VERCEL_URL;

export const ABOUT = `${ROOT}/about`;
export const ACTIVITIES = `${ROOT}/activities`;
export const CONTACT = `${ROOT}/contact`;
