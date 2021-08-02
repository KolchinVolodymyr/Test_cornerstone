import PageManager from '../page-manager';
import $ from 'jquery';
import utils from '@bigcommerce/stencil-utils';



export default class Custom extends PageManager {

        onReady() {

            /*input validation function */
            function validate(e) {
              const regex = /[A-Za-z ,.]/;
              const chars = e.target.value.split('');
              const char = chars.pop();
              if (!regex.test(char)) {
                e.target.value = chars.join('');
                alert('unknown or restricted symbol');
              }
              if(chars.length > 199 ){
                alert('too much symbols. Please, make your text shorter');
              }
            }
            /* Event listener input Congratulatory inscription */
            document.querySelector('#сongratulatory_inscription').addEventListener('input', validate);



            /* show input for a gift  */
            function yesnoCheck() {
                if (document.getElementById('yesCheck').checked) {
                    document.getElementById('ifYes').style.display = 'block';
                }
                else document.getElementById('ifYes').style.display = 'none';
            }
            /* Event listener input */
            /* show input for a gift */
            document.querySelector('#yesCheck').addEventListener('change', yesnoCheck);
            /**/




            /**/
            function congratulationInscription() {
                if (document.getElementById('email').checked) {
                    document.getElementById('congratulationInscriptionIfYes').style.display = 'block';
                }
                else document.getElementById('congratulationInscriptionIfYes').style.display = 'none';
            }
            /* Event listener input */
            /* Send a congratulation inscription via email */
            document.querySelector('#email').addEventListener('change', congratulationInscription);

            /* Event listener input */
            /* Print it on a gift card */
            document.querySelector('#gift').addEventListener('change', congratulationInscription);
            /**/


            document.querySelector('#сongratulatory_inscription').addEventListener('input', function() {
                console.log(document.querySelector('#сongratulatory_inscription').value);
            });



            // add event listener for #addToCart button
            document.querySelector('#form-action-addToCart').addEventListener('click', function() {
            console.log("document.querySelector('email').value", document.querySelector('#email').value)
                alert('something else 2', document.querySelector('#сongratulatory_inscription').value);

/**/
//    (async()=> {
//        await fetch('https://api.bigcommerce.com/stores/u12v517znw/v3/catalog/products', {
//          method: 'get',
//          mode: 'cors',
//          headers: {
//            'Accept': 'application/json',
//            'Content-Type': 'application/json',
//            'X-Auth-Token:': '67ju04j0ni6eu65v23stmrjrdbu1tk3'
//          },
//          body: JSON.stringify({a: 7, str: 'Some string: &=&'})
//        }).then(res => res.json())
//          .then(res => console.log(res));
//          .catch(error => console.log(error));
//        }
//    )();



//(async () => {
//  const rawResponse = fetch('https://api.bigcommerce.com/stores/u12v517znw/v3/catalog/products', {
//    method: 'get',
//    headers: {
//      'Accept': 'application/json',
//      'Content-Type': 'application/json',
//      'X-Auth-Token:': '67ju04j0ni6eu65v23stmrjrdbu1tk3'
//    },
//
//  });
//  const content = await rawResponse.json();
//
//  console.log(content);
//})();

//console.log('window', window);


fetch('https://cors-anywhere.herokuapp.com/https://api.bigcommerce.com/stores/u12v517znw/v3/catalog/products/136/custom-fields', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Auth-Token': '67ju04j0ni6eu65v23stmrjrdbu1tk3'
    },
    body: JSON.stringify({"name": document.querySelector('#сongratulatory_inscription').value, "value": "1976"})

  })
  .then(function (data) {
    console.log('Request succeeded with JSON response', data);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });



alert('test');








});







    }




}






