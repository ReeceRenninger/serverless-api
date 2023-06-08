import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
  'id': String,
  'name': String,
});

const personModel = dynamoose.model('peoples', schema); // 'peoples' is the model taking the db name and schema above

export const handler = async (event) => {
  let id = event.pathParameters.id;
  let parsedData = JSON.parse(event.body);
  let updatedName = parsedData.name;

  const response = { statusCode: null, body: null };

  try {
    let updatedPerson = await personModel.update({ 'id': id, 'name': updatedName });
    response.body = JSON.stringify(updatedPerson);
    response.statusCode = 200;
  } catch (error) {
    response.body = JSON.stringify(error.message);
    response.statusCode = 500;
  }




  return response;
};