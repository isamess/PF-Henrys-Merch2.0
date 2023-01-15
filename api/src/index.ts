import app from './app'
import './database'
require('dotenv').config();

app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'))
})
