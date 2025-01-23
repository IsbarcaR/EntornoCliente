$('document').ready(function(){

    function addTask(){
        const taskText= $('#newTask').val();

        if(taskText !==''){
            const newTaskItem= $('<li>')
            .append(
                $('<span>').text(taskText),
                $('<button class="delete">').text('❌'),
                $('<button class="complete">').text('✅')
            );
            newTaskItem.hide();
            $('#taskList').append(newTaskItem);
            newTaskItem.fadeIn(400);

            $('#newTask').val('');
        }
    }
    $('#addTask').click(addTask);

    $('#taskList').on('click','.complete',function(){
        $(this).siblings('span').toggleClass('completed');
    })

    $('#taskList').on('click', '.delete',function(){
        $(this).parent().fadeOut(400,function(){
            $(this).remove();
        })
    })

});