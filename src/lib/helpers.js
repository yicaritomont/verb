

const helpers = {};

helpers.validateNumber = async(text) =>
{
  try{
    return (/^([0-9])*$/.test(text))
  }catch(e)
  {
    console.log(e);
  }
}

module.exports = helpers;
