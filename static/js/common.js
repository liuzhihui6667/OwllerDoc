function getMarkdown(name) {
    var url = '/md/'+name+'.md'
    $.ajax({
        url: url,
        dataType: 'text',
        type: 'get',
        success: function(data) {
            document.getElementsByClassName('markdown-body')[0].innerHTML = marked(data)
            var owller = new OwllerUI(cnf)
            owller.renders.autoRender()
            $('pre code').each(function(i, block) {
                hljs.highlightBlock(block);
            });
        }
    })
}


var cnf = {
    data: {
        Nav: {
            item: [
                {
                    text: '一级菜单',
                    active: false,
                    icon: 'dashboard',
                    list: [
                        {
                            text: '二级菜单',
                            list: [
                                {
                                    text: '三级菜单'
                                },{
                                    text: '三级菜单'
                                }
                            ]
                        }
                    ]
                },
                {
                    text: '一级菜单',
                    active: false,
                    icon: 'dashboard',
                    list: [
                        {
                            text: '二级菜单',
                            list: [
                                {
                                    text: '三级菜单'
                                },{
                                    text: '三级菜单'
                                }
                            ]
                        }
                    ]
                },
                {
                    text: '一级菜单',
                    active: false,
                    icon: 'dashboard',
                    list: [
                        {
                            text: '二级菜单',
                            list: [
                                {
                                    text: '三级菜单'
                                },{
                                    text: '三级菜单'
                                }
                            ]
                        },{
                            text: '二级菜单',
                            list: [
                                {
                                    text: '三级菜单'
                                },{
                                    text: '三级菜单'
                                }
                            ]
                        }
                    ]
                }
            ],
            itemh: [
                {
                    text: '一级菜单',
                    active: false,
                    icon: 'dashboard',
                    list: [
                        {
                            text: '二级菜单',
                            list: [
                                {
                                    text: '三级菜单'
                                },{
                                    text: '三级菜单'
                                }
                            ]
                        }
                    ]
                },
                {
                    text: '一级菜单',
                    active: false,
                    icon: 'dashboard',
                    list: [
                        {
                            text: '二级菜单',
                            list: [
                                {
                                    text: '三级菜单'
                                },{
                                    text: '三级菜单'
                                }
                            ]
                        }
                    ]
                },
                {
                    text: '一级菜单',
                    active: false,
                    icon: 'dashboard',
                    list: [
                        {
                            text: '二级菜单',
                            list: [
                                {
                                    text: '三级菜单'
                                },{
                                    text: '三级菜单'
                                }
                            ]
                        },{
                            text: '二级菜单',
                            list: [
                                {
                                    text: '三级菜单'
                                },{
                                    text: '三级菜单'
                                }
                            ]
                        }
                    ]
                }
            ],
            nav: [
                {
                    text: '布局',
                    active: false,
                    icon: 'layout',
                    list: [
                        {
                            text: 'Layout布局',
                        }
                    ]
                },
                {
                    text: '组件',
                    active: false,
                    icon: 'store',
                    list: [
                        {
                            text: '导航栏',
                        }
                    ]
                },
                {
                    text: '其他',
                    active: false,
                    icon: 'coins',
                    list: [
                        {
                            text: 'Icon图标',
                        }
                    ]
                }
            ],
        }
    }
}

var owller = new OwllerUI(cnf)