

import request from '../../src/index'


request.get('/base/get').then(res=>{
    console.log('fetch' , res)
})


