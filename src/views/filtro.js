
module.exports = function (){

   let filtros = document.getElementsByClassName('checkbox_filtro')
   let cantidad_checkbox = filtros.length
   let arreglo = []
   
   while(cantidad_checkbox != 0){

      filtros[cantidad_checkbox-1].addEventListener('change', function(){
      
         if(this.checked){
            arreglo.push(this.value)            
         }
         else arreglo.splice(arreglo.indexOf(this.value), 1)
      }); cantidad_checkbox --
   }
   return arreglo 
}
