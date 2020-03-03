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
// <div class="ui loading form">