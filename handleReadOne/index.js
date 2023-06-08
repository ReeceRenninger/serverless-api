import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
  'id': String,
  'name': String,
});

const personModel = dynamoose.model('peoples', schema); // 'peoples' is the model taking the db name and schema above

export const handler = async (event) => {
//Cat.scan("breed").contains("Terrier").exec() // will scan all items and filter all items where the key `breed` contains `Terrier`

  const response = { statusCode: null, body: null, };
  
  try {
    let id = event.pathParameters.id;
    console.log('this is the id', id);
    let onePerson = await personModel.scan('id').contains(id).exec();
    response.body = JSON.stringify(onePerson);
    response.statusCode = 200;
  } catch (error) {
    response.body = JSON.stringify(error.message);
    response.statusCode = 500;
  }




  return response;
};