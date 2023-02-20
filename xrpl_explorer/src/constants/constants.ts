/**
 * XRPL vars
 */
export const RIPPLE_TEST_URL: string = 'wss://s2-clio.ripple.com:51233';
export const DEFAULT_ADDRESS: string = 'rSCXRaUyg9CkzHMidE7oYETB4W2bM2se7'
export const XRP_CHANGE: number = 0.000001;

/**
 * List Headers 
 */
export const TRANSACTIONS_LIST_HEADER: string[] = ['ACCOUNT','TRANSACTION TYPE','STATUS','DATE/TIME (UTC)'];
export const ISSUED_TOKENS_LIST_HEADER: string[] = ['CURRENCY CODE', 'ISSUER', 'AMOUNT'];
export const NFT_LIST_HEADER: string[] = ['TOKEN ID','ISSUER','TAXON'];


/**
 * Colors
 */
export const PAYMENT_BADGE_BORDER_COLOR: string = '#32e685';
export const PAYMENT_BADGE_BACKGROUND_COLOR: string = '#145c35';
export const TRANSACTION_TYPE_DATA_BG_COLOR: string = '#1a1a1b';



/**
 * Date format
 */
export const DATE_FORMAT: Object = { 
    year: 'numeric', 
    month: 'numeric', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric', 
    hour12: true 
  };