$(document).ready(function(){
    $('form').submit(event=>{
        event.preventDefault()
        form = $("form")

        $ajax({
            'url':'/ajax/newsletter/',
            'type':'POST',
            'data':'json',
            'success':data=>{
                alert(data['success'])
            },
        })
    })
})