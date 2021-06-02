const dev = process.env.NODE_ENV !== 'production';

export const ROOT = dev
  ? process.env.NEXT_PUBLIC_ROOT
  : 'http://ctcs-next-js.vercel.app';

export const ABOUT = `${ROOT}/about`;
export const ACTIVITIES = `${ROOT}/activities`;
export const CONTACT = `${ROOT}/contact`;
