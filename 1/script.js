function createDiv2(){
    $(document).ready(function(){
        //New div object
        let newDiv = {
            id: 'div', 
            class: 'divclass',
        };
        //variable to create a div
        let $div =$('<div>', newDiv);
        //div content
        $div.html('Here is a new div!');
        //append div to body
        $('body').append($div);
    })
}

function createDiv(){
    $(document).ready(function(){
        let newDiv = document.createElement('div');
        let $div = $('<div>', newDiv);
        $div.html('NEW DIV!!!');
        $('body').append($div);
    })
}