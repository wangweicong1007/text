var $setfont = function(){
    var $dlg =$(''
    +'<div class="notepad-dlg-font">'
    +    '<div class="notepad-dlgbox">'
    +    '<div class="notepad-dlg-titlebar">'
    +        '<p class="title">字体</p>'
    +        '<span class="close-btn">✖</span>'
    +    '</div>'
    +    '<div class="notepad-dlg-main">'
    +        '<div class="font-family"><p>字体(F):</p></div>'
    +        '<div class="font-style"><p>字形(Y):</p></div>'
    +        '<div class="font-size"><p>大小(S):</p></div>'
    +        '<fieldset class="sample">'
    +           '<legend>示例</legend>'
    +            '<p>AaBbYyZz</p>'
    +        '</fieldset>'
    +        '<div class="script">'
    +        '<label>'
    +            '脚本(R):<br>'
    +           ' <select>'
    +            '<option value="西欧语言">西欧语言</option>'
    +            '<option value="中文 GB2312">中文 GB2312</option>'
    +           '</select>'
    +        '</label>'
    +       '</div>'
    +        '<input class="btn-ok btn" type="button" value="确定">'
    +        '<input class="btn-cancel btn" type="button" value="取消">'
    +    '</div>'
    +    '</div>'
    +'</div>'
    );
    var $btnClose = $dlg.find('.close-btn'),
        $btnOk = $dlg.find('.btn-ok'),
        $btnCancel = $dlg.find('.btn-cancel'),
        $sample = $dlg.find('fieldset');

        //关闭
    $btnClose.click(function(){
        $dlg.remove();
    })
    $btnOk.click(function(){
        //设置
        $dlg.remove();
        var family = $sample.find('p').css('font-family');
        var style = $sample.find('p').css('font-style');
        var weight = $sample.find('p').css('font-weight');
        var size = $sample.find('p').css('font-size');

        var textArea = new $editor();
        textArea.chageTextAreaStyle($('textarea'),family,style,weight,size);
        
    })
    $btnCancel.click(function(){
        $dlg.remove();
    })
    
    $sample.find('p').css({'font-family':'Agency FB'});
    var list = new $list();
    list.setFontStyle($sample.find('p'), '常规');
    $sample.find('p').css({'font-size':'26px'});

    //往list里传入3个框的数据
    function show(con){
        $(con).append($dlg);
        
        var list1 = new $list();
        var list2 = new $list();
        var list3 = new $list();
        list1.show({
            contaniner:'.font-family',
            list:['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'],
            select:0,
            width:'176px',
            isFont: true,
            isFontStyle: false,
            selectHandler: function(e) { 
                // console.log(e); 
                $('.sample').find('p').css({'font-family':e});
            }
        });
        list2.show({
            contaniner:'.font-style',
            list:['常规', '斜体', '粗体', '粗偏斜体'],
            select:0,
            width:'132px',
            isFont: false,
            isFontStyle:true,
            selectHandler: function(e) {
                // console.log(e); 
                list2.setFontStyle($('.sample').find('p'),e);
            }
        });
        list3.show({
            contaniner:'.font-size',
            list:['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'],
            select:0,
            width:'64px',
            isFont: false,
            isFontStyle:false,
            selectHandler: function(e) { 
                // console.log(e); 
                $('.sample').find('p').css({'font-size':e+'px'});
            }
        });
    }
    return {
        show:show
    };
}