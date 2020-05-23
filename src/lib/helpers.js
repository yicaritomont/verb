

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

helpers.fileValidation = async(file)=>
{
  var allowedExtensions = /(.csv)$/i;
  if(!allowedExtensions.exec(file)){
    alert('Please upload file having extensions .csv only.');
    return  await false;
  }
  return await true;
}
module.exports = helpers;
