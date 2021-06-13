const form = document.getElementById('form')
let convert =document.getElementById('convert')
let cantidad =document.getElementById('cantidad')
let valor = document.getElementById('valor')





fetch('https://openexchangerates.org/api/latest.json?app_id=38c96a2dbfcf4e3e85d26d4dbb980d0e')
    .then(response => response.json())
    .then(data =>{
      
        
        let colon = data.rates.CRC
       console.log(colon)
        
        form.addEventListener('submit', (e)=>{
          e.preventDefault()
            if(cantidad.value !== "number") valor.innerHTML = "Valor incorrecto"
           if(convert.value === "1"){
                 let valorDolar = cantidad.value / colon; 
                 valor.innerHTML = `${valorDolar.toFixed(2)} $`
                
           }
           if(convert.value === "2"){
            valorColon = cantidad.value * colon ;
            valor.innerHTML = `${valorColon.toFixed(0)} ₡ `
            
      }
            
           
        
        
        })
        
       
    })




