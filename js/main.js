var $menubar=(function(){
         //输入框
         var $editorHtml = $(''
         + '<div class="notepad-editor">'
             + '<textarea spellcheck="false" auto-size="none"></textarea>'
         + '</div>');
    //菜单
    var $bar =$('<div class="notepad-menubar"></div>');

    var menuData,      //菜单数据
        menus=[];      //存放五个下拉菜单的DOM对象

    var open=-1;//下拉菜单是否展开，没有展开为-1


    function createMenuTitle(){
        var $titles=$('<ul class="menu-title"></ul>')

        //显示title数据
        for(var i=0;i<menuData.length;i++){
            var $title=$('<li class="title"></li>');
            $title.html(menuData[i].title);
            $title.attr('data-id', i);//设置属性值
            $titles.append($title);

            $title.click(function(){
                var i=Number(this.dataset.id);

                if(open == -1){
                    //显示点击的一页下拉列表
                    menus[i].css({display:'block'});
                    open=i;
                }else if(open !==i){
                    //隐藏先点击的，显示后点击
                    menus[open].css({display:'none'});
                    menus[i].css({display:'block'});
                    open=i;
                }
                //else{
                //     //点击两次同一个title，隐藏下拉列表
                //     menus[open].css({display:'none'});
                //     open=-1;
                // }
            });
            //点击输入框，下拉列表隐藏
            $editorHtml.click(function(){
                if(open !==-1 ){
                  menus[open].css({display:'none'});
                  open=-1;
                }
            })
            $title.hover(function() {
                //下拉列表显示，浮动时其他也显示
                if(open !== -1) {
                  var i = Number(this.dataset.id);
        
                  menus[open].css({ display: 'none' });
                  menus[i].css({ display: 'block' });
                  open = i;
                }
              });
              

        }
        $bar.append($titles);
    }

    //展开下拉菜单
    function createMenus(){
        for(var i=0;i<menuData.length;i++){
            var $menus=$('<ul class="menus"></ul>'),
                items=menuData[i].menuItems;

            for(var j=0;j<items.length;j++){
                if(items[j].title == 'hr'){
                    var $hr=$('<li class="menu-hr" ></li>')
                    $menus.append($hr);
                }
                else{
                    var $shortcut=$('<span class="shortcut"></span>');
                    $shortcut.html(items[j].shortcut);
                    var $menu=$('<li class="menu-item"></li>');
                    $menu.html(items[j].title);
                    $menu.attr('data-x', i);
                    $menu.attr('data-y', j);
                    $menu.append($shortcut);
                    if(!items[j].enabled){
                        if(!items[j].enabled) $menu.addClass('disabled');
                        $menu.css({
                            // 'pointer-events': 'none',
                            'color': '#6d6d6d'
                        })
                    } 
                    $menus.append($menu);
                    $menu.click(function() {
                        if($(this).hasClass('disabled')) return;
                        var i = this.dataset.x, j = this.dataset.y;
              
                        menuData[i].menuItems[j].handler();
                        menus[i].css({display: 'none'});
                        active = -1;
                    });
                }
                $menus.css({
                    width: menuData[i].width,
                    left: menuData[i].left,
                    display: 'none'
                  }); 
            }
            $bar.append($menus); 
            menus.push($menus);
        }
    }


    function show(data){
        menuData=data;
        createMenus();
        createMenuTitle();
        
        

        $('body').append($bar);
        $('body').append($editorHtml);
    }

    return{
        show : show,
    };
}());