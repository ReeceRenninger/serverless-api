import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
  'id': String,
  'name': String,
});

const personModel = dynamoose.model('peoples', schema); // 'peoples' is the model taking the db name and schema above

export const handler = async (event) => {
  console.log('this is the body event', event.body);
  // TODO implement

  const response = { statusCode: null, body: null };

  try {
    let results = await personModel.scan().exec(); //scan.exec allows for a true GET ALL
    console.log('results------->', results);

    response.body = JSON.stringify(results);
    response.statusCode = 200;
  } catch (error) {
    response.body = JSON.stringify(error.message);
    response.statusCode = 500;
  }

  return response;
};