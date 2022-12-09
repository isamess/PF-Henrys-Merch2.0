import app from './app';
import './database';



app.listen(app.get('port'), ()=>{
    console.log('server on port 3000', app.get('port'))
})

