const getTodo = (req, res) =>{
  const id = req.params.id;
  console.log(`id ${id} request for todos`);
  return res.json({
    message: "apple, orange, banana"
  });
};

module.exports = {
  getTodo,
};
