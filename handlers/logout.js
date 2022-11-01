module.exports = function Logout(req, res)  {
  req.session.destroy();
  res.redirect('/');
}
