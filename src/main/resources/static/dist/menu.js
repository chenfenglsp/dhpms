$(document).ready(function () {
    var isFirstMenu;

    var menulist = {
        "code": 100,
        "msg": "操作成功",
        "extend": {
            "children": [{
                "id": "1",
                "text": "材料仓库",
                "children": [{"id": "6", "text": "库存管理", "children": [], "parentId": "1"}, {
                    "id": "7",
                    "text": "供应商管理",
                    "children": [],
                    "parentId": "1"
                }, {"id": "8", "text": "来料管理", "children": [], "parentId": "1"}, {
                    "id": "9",
                    "text": "领料管理",
                    "children": [],
                    "parentId": "1"
                }],
                "parentId": "1"
            }, {
                "id": "2",
                "text": "订单管理",
                "children": [{"id": "10", "text": "订单详情", "children": [], "parentId": "2"}, {
                    "id": "11",
                    "text": "创建订单",
                    "children": [],
                    "parentId": "2"
                }],
                "parentId": "2"
            }, {
                "id": "3",
                "text": "生产状况",
                "children": [{"id": "12", "text": "生产计划表", "children": [], "parentId": "3"}, {
                    "id": "13",
                    "text": "生产管理",
                    "children": [],
                    "parentId": "3"
                }, {"id": "14", "text": "异常反馈", "children": [], "parentId": "3"}],
                "parentId": "3"
            }, {
                "id": "4",
                "text": "成品仓库",
                "children": [{"id": "15", "text": "成品详情", "children": [], "parentId": "4"}, {
                    "id": "16",
                    "text": "成品入库",
                    "children": [],
                    "parentId": "4"
                }, {"id": "17", "text": "成品出库", "children": [], "parentId": "4"}, {
                    "id": "18",
                    "text": "残次品反馈",
                    "children": [],
                    "parentId": "4"
                }],
                "parentId": "4"
            }, {
                "id": "5",
                "text": "BOM报表",
                "children": [{"id": "19", "text": "待开发模块", "children": [], "parentId": "5"}],
                "parentId": "5"
            }]
        }
    };
    $(window).load(function(){
        var showlist = $("<ul class=\"sidebar-menu\"></ul>");
        $("<li class=\"header\">主导航</li>").appendTo(showlist);
        isFirstMenu=menulist.extend.children.length;
        showall(menulist.extend.children, showlist);
        $("#div_menu").append(showlist);
    });
     function showall(menu_list, parent) {
        for (var menu in menu_list) {
            if (menu_list[menu].children.length > 0) {
                var li = $("<li></li>");
                if(isFirstMenu==0){
                    li = $("<li></li>");
                }else{
                    li = $("<li class=\"treeview\"></li>");
                    isFirstMenu=isFirstMenu-1;
                }
                $(li).append("<a href=\"#\"><i class=\"fa fa-share\"></i> <span>"+menu_list[menu].text+"</span><i class=\"fa fa-angle-right pull-right\"></i></a>");
                var nextParent=$("<ul class=\"treeview-menu\"></ul>");
                $(nextParent).appendTo(li);
                $(li).appendTo(parent);
                showall(menu_list[menu].children, nextParent);
            }
            else {
                $("<li><a href=\"#\"><i class=\"fa fa-circle-o\"></i>"
                    +menu_list[menu].text
                    +"</a></li>").appendTo(parent);
            }
        }
    }

});