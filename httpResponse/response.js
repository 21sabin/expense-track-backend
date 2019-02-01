const success = (response, obj) => {
  response.status(200).send( obj );
};

const error = (response, obj) => {
  response.send(obj);
};

module.exports ={ success ,error }