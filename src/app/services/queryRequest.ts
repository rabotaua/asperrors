export const query = {
  api: 'https://bigquery.azurewebsites.net/query',
  bigQuery: 'select *' +
  'from data.asp where (_PARTITIONTIME IS NULL OR _PARTITIONTIME=TIMESTAMP(CURRENT_DATE()))' +
  'AND timestamp >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 120 MINUTE)'
}
