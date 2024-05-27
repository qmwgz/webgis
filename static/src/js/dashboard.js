/** @odoo-module **/

import { Component,useState,onMounted} from "@odoo/owl";
import { registry } from "@web/core/registry";
import { CheckBox } from "@web/core/checkbox/checkbox";
import { Dropdown } from "@web/core/dropdown/dropdown";
import { DropdownItem } from "@web/core/dropdown/dropdown_item";


class AwesomeDashboard extends Component {
    static template = "webgis.AwesomeDashboard";
    static components  = { CheckBox,Dropdown, DropdownItem};
   
    setup() {
        this.state = useState({ value: 0 });
        onMounted(() => {
            // do something here
            var id =document.getElementById('map');
            var map = new ol.Map({
                layers: [
                    new ol.layer.Tile({
                        source: new ol.source.XYZ({url: 'http://webst0{1-4}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}'})
                    }),
                    // 添加 GeoJSON 图层
                    new ol.layer.Vector({
                        source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: '/addons/webgis/static/src/geojson/510000.topo.json'
                        })
                    })
                    
                ],
                target: id,
                view: new ol.View({
                    // center: [104.065735,30.659462],
                    center: ol.proj.fromLonLat([104.065735,30.659462]),
                    zoom: 16
                })
            });
          });

    }


    increment() {
        this.state.value++;
        var id =document.getElementById('map');
            var map = new ol.Map({
                layers: [
                    new ol.layer.Tile({
                        source: new ol.source.XYZ({url: 'http://webst0{1-4}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}'})
                    })
                ],
                target: id,
                view: new ol.View({
                    center: [0, 0],
                    zoom: 2
                })
            });
        
    }

    onValueChange(){
        alert(1233);
    }

    onItemSelected(cs){
        alert(cs);
    }
}

registry.category("actions").add("webgis.dashboard", AwesomeDashboard);
