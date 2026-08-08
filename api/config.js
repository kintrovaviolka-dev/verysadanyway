module.exports = async (req, res) => {
  // Browser-delivered values cannot be authentication secrets. This endpoint
  // previously disclosed CLIENT_TOKEN, making the authorization check bypassable.
  return res.status(410).json({ error: 'This endpoint has been retired.' });
};
