var $editor = function() {
    var $editorHtml = $(''
    + '<div class="notepad-editor">'
        + '<textarea spellcheck="false" auto-size="none"></textarea>'
    + '</div>');
  
    var $textArea = $editorHtml.find('textarea');
    // chageTextAreaStyle($textArea,font.fontFamily,font.fontStyle,font.fontWeight,font.fontSize);

    function show(con){
        $(con).append($editorHtml);
    }

    //根据选择改变
    function chageTextAreaStyle($textArea,family,style,weight,size){
        $textArea.css({'font-family':family});
        $textArea.css({'font-style':style});
        $textArea.css({'font-weight':weight});
        $textArea.css({'font-size':size});
    }
    return{
        show : show,
        chageTextAreaStyle : chageTextAreaStyle
    };
}