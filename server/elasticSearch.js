import elasticsearch from 'elasticsearch';
let elasticClient;

export const getElasticInstance = () => {
  if (elasticClient)
    return elasticClient;
  elasticClient = new elasticsearch.Client({
    host: 'localhost:9200',
  });
  return elasticClient;
}
;
