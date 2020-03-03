$('select.dropdown')
  .dropdown()
;

$('form').form({
    on: 'blur',
    keyboardShortcuts: false,
    fields: {
        empty: {
            identifier: 'empty',
            rules: [{
                type: 'empty',
                prompt: 'Please enter a value'
            }]
        },
        dropdown: {
            identifier: 'dropdown',
            rules: [{
                type: 'empty',
                prompt: 'Please select a dropdown value'
            }]
        }
        
    }
});


const getform = document.querySelector('form');
const lbl1 = document.getElementById('lbl1');
const lbl2 = document.getElementById('lbl2');
const lbl3 = document.getElementById('lbl3');
getform.addEventListener('submit', (e) =>
{
    e.preventDefault();
    const amountval = document.getElementById('d').value;
    const dpval = document.getElementById('dd').value;
    const dpval2 = document.getElementById('ddd').value;
    const url = `/currency/convert?base=${dpval}&symbol=${dpval2}&amount=${amountval}`
fetch(url)
.then(res => res.json())
.then((data) =>
{
    lbl1.textContent = amountval+" " +data.base_currency + " = ";
    lbl2.textContent = data.total+" "+ data.quote_currency ;
    lbl3.textContent = "1 "+data.base_currency+ " = " + data.quote+" "+data.quote_currency;
}).catch((err) =>
{
    console.log(err)
})    
})



// <div class="ui loading form">