const dev = process.env.NODE_ENV !== 'production';
export const ROOT = dev ? 'http://localhost:3000' : 'http://example.com';
export const DIRNAME = '/Users/begzodsafarov/Desktop/coding/React/ctcs';
export const home = ROOT + '/home';
export const services = ROOT + '/#services';
export const about = ROOT + '/about';
export const contact = ROOT + '/contact';
export const activities = ROOT + '/activities';
