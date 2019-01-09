const success = (response, obj) => {
  let result;
  if (typeof obj == "object") {
    if (obj["data"]) {
      result = obj;
    } else {
      result = { data: obj };
    }
  } else {
    result = { data: obj };
  }
  response.status(200).send({ result });
};

const error = (response, obj) => {
  response.status(200).send(error);
};

module.exports ={ success ,error }