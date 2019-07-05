function getMarkdown(name) {
    var url = '/md/'+name+'.md'
    $.ajax({
        url: url,
        dataType: 'text',
        type: 'get',
        success: function(data) {
            document.getElementsByClassName('md-container')[0].innerHTML = marked(data);
            new OwllerUI.OwllerUI();
            $('pre code').each(function(i, block) {
                hljs.highlightBlock(block);
            });
            mdEventBind();
        }
    })
}

function mdEventBind() {
    $('.exam-btn').click(function (e) {
        var codeWrapper = $(this).prev()[0];
        codeWrapper.style.transition = 'height .3s ease';
        if($(this).hasClass('open')) {
            codeWrapper.style.height = '0px';
            $(this).removeClass('open');
            $(this).text('Click To Show Code');
        } else {
            var height = window.getComputedStyle(codeWrapper.firstElementChild).height;
            codeWrapper.style.height = height;
            $(this).addClass('open');
            $(this).text('Click To Hide Code');
        }
    });
}
