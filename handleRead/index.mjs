import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
  'id': String,
  'name': String,
});


export const handler = async (event) => {
  console.log('this is the body event', event.body);
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};