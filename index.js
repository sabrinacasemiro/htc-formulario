const inputList = document.querySelectorAll('.input')
const $warnning = document.querySelector('.warnning')
const $buttonForm = document.querySelector('.button-form')

const $form = document.querySelector('.box-form')

function verifyField(){
    let error = false
    for(const $input of inputList){
        const value = $input.value
        console.log(value)    
        if(!value){
            $input.classList.add('error')
            error = true            

            setTimeout(function(){
                $input.classList.remove('error')
            }, 1500)
        }
    }
    if (error){
        $warnning.classList.add('show')
    } else {
        $warnning.classList.remove('show')
    }
}

$form.addEventListener('submit', function(e){
    e.preventDefault()
    verifyField()
})

$buttonForm.addEventListener('click', function(){
    $buttonForm.classList.add('clicked-button')   
    
    setTimeout(function(){
        $buttonForm.classList.remove('clicked-button')}, 1500)
})