module.exports = function LoginHandler(req, res) {
  if (req.session.userid) {
    return res.redirect('/');
  }

  res.setHeader('Content-Type', 'text/html')
  res.write(`
      <h1>Login</h1>
      <form method="post" action="/process-login">
        <input type="text" name="username" placeholder="Username" /> <br>
        <input type="password" name="password" placeholder="Password" /> <br>
        <button type="submit">Login</button>
      </form>
    `);

  res.end();
}
