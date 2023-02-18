async function arabika(){
    const in1 = document.querySelector('#in1')
    const in2 = document.querySelector('#in2')
    const wrong = document.querySelector('#wrong')
   
   
    if (in2.value== '' && in1.value == '' ){
        wrong.innerHTML += `
        <div>Введите логин</div>
        <div>Введите папроль</div>`
    }else if(in1.value == '' ){
        wrong.innerHTML += `<div>Введите логин</div>`
    } else if (in2.value== '' ){
        wrong.innerHTML += `<div>Введите пароль</div>`
    }else if(in2.value != '' && in1.value != '' ){
        wrong.innerHTML = `<div></div>`
        console.log()
        try {
            const url = 'http://192.168.1.21:5000/login/admin';
            const response = await fetch(url, {
                method: 'POST'
                , headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body: JSON.stringify({
                    login: in1.value,
                    password: in2.value
                })
            })
            const data = await response.json()
            if (data.message.success === true) {
                window.location.href = ''
            }
        }
        catch(err) {
            alert('Ошибка')
        }
    }

    
}  