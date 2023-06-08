import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
  'id': String,
  'name': String,
});

const personModel = dynamoose.model('peoples', schema); // 'peoples' is the model taking the db name and schema above

export const handler = async (event) => {
  let parsedBody = JSON.parse(event.body);

  const response = { statusCode: null, body: null, };

  try {
    let newPerson = await personModel.create(parsedBody);
    response.body = JSON.stringify(newPerson);
    response.statusCode = 200;
  } catch (error) {
    response.body = JSON.stringify(error.message);
    response.statusCode = 500;
  }




  return response;
};