/**
 * Tokko Broker API Integration
 * CQuibel Propiedades
 */

const TOKKO = {
  API_KEY: 'e8d08658e7de1ef487a332dac516431648195270',
  BASE_URL: 'https://tokkobroker.com/api/v1',

  /** Fetch all properties (paginated) */
  async getProperties(params = {}) {
    const defaults = { limit: 100, offset: 0 };
    const query = new URLSearchParams({ ...defaults, ...params, key: this.API_KEY });
    const res = await fetch(`${this.BASE_URL}/property/?${query}`);
    if (!res.ok) throw new Error(`Tokko API error: ${res.status}`);
    return res.json();
  },

  /** Fetch a single property by ID */
  async getProperty(id) {
    const res = await fetch(`${this.BASE_URL}/property/${id}/?key=${this.API_KEY}`);
    if (!res.ok) throw new Error(`Tokko API error: ${res.status}`);
    return res.json();
  },

  /** Fetch developments */
  async getDevelopments(params = {}) {
    const defaults = { limit: 50, offset: 0 };
    const query = new URLSearchParams({ ...defaults, ...params, key: this.API_KEY });
    const res = await fetch(`${this.BASE_URL}/development/?${query}`);
    if (!res.ok) throw new Error(`Tokko API error: ${res.status}`);
    return res.json();
  },

  /** Fetch a single development by ID */
  async getDevelopment(id) {
    const res = await fetch(`${this.BASE_URL}/development/${id}/?key=${this.API_KEY}`);
    if (!res.ok) throw new Error(`Tokko API error: ${res.status}`);
    return res.json();
  },

  /** Helper: extract the main price from a property */
  getPrice(property) {
    if (!property.operations || property.operations.length === 0) return null;
    const op = property.operations[0];
    if (!op.prices || op.prices.length === 0) return null;
    return op.prices[0];
  },

  /** Helper: format price as string */
  formatPrice(property) {
    const price = this.getPrice(property);
    if (!price || !price.price) return 'Consultar';
    const sym = price.currency === 'USD' ? 'U$D' : '$';
    return `${sym} ${Number(price.price).toLocaleString('es-AR')}`;
  },

  /** Helper: get operation type label */
  getOperationType(property) {
    if (!property.operations || property.operations.length === 0) return '';
    return property.operations[0].operation_type; // "Sale" | "Rent"
  },

  /** Helper: get first photo URL, or placeholder */
  getPhoto(property, fallback = 'img/placeholder.jpg') {
    if (property.photos && property.photos.length > 0) {
      return property.photos[0].image;
    }
    return fallback;
  },

  /** Helper: short location */
  getLocation(property) {
    if (property.location) {
      return property.location.short_location || property.location.full_location || property.address;
    }
    return property.address;
  },
};
