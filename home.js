// home.js
function handleHome(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Welcome to the Home Page!');
}

module.exports = handleHome;
