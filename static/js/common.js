function getMarkdown(name) {
    var url = '/md/'+name+'.md'
    $.ajax({
        url: url,
        dataType: 'text',
        type: 'get',
        success: function(data) {
            document.getElementsByClassName('md-container')[0].innerHTML = marked(data)
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
                    icon: 'layout',
                    list: [
                        {
                            text: '二级菜单'
                        },{
                            text: '二级菜单'
                        },{
                            text: '二级菜单',
                            active: true
                        }
                    ]
                },
                {
                    text: '一级菜单',
                    active: false,
                    icon: 'store',
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
                    text: '基础',
                    active: false,
                    list: [
                        {
                            text: 'Icon图标',
                            icon: 'coins',
                            to: '/icon/icon.html'
                        },{
                            text: '按钮',
                            icon: 'button',
                        },{
                            text: '提示器',
                            icon: 'tips',
                        },{
                            text: '弹出框',
                            icon: 'popup',
                        }
                    ]
                },
                {
                    text: '布局',
                    active: false,
                    list: [
                        {
                            text: 'Layout布局',
                            icon: 'layout',
                            to: '/layout/layout.html'
                        }
                    ]
                },
                {
                    text: '组件',
                    active: false,
                    list: [
                        {
                            text: '导航栏',
                            icon: 'store',
                            to: '/navigation/navigation.html'
                        },{
                            text: '跑马灯',
                            icon: 'swiper',
                            to: ''
                        },{
                            text: '分页器',
                            icon: 'page',
                        },{
                            text: '树状图',
                            icon: 'tree',
                        }
                    ]
                },
                {
                    text: '图表',
                    active: false,
                    list: [
                        {
                            text: '柱状图',
                            icon: 'barChart',
                        },{
                            text: '线形图',
                            icon: 'linearChart',
                        },{
                            text: '饼状图',
                            icon: 'pieChart',
                        }
                    ]
                }
            ],
        }
    }
}

// var owller = new OwllerUI(cnf);