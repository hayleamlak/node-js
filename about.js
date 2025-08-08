// about.js
function handleAbout(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('About Us Page');
}

module.exports = handleAbout;
