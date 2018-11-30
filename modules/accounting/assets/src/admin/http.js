import axios from 'axios'

export const HTTP = axios.create({
    baseURL: erp_acct_var.site_url+'/wp-json/erp/v1',
    headers: {
        'X-WP-Nonce':  erp_acct_var.rest_nonce
    }
});