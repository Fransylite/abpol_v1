var highlightLayer;
        function highlightFeature(e) {
            highlightLayer = e.target;

            if (e.target.feature.geometry.type === 'LineString') {
              highlightLayer.setStyle({
                color: '#ffff00',
              });
            } else {
              highlightLayer.setStyle({
                fillColor: '#ffff00',
                fillOpacity: 1
              });
            }
            highlightLayer.openPopup();
        }
        var crs = new L.Proj.CRS('EPSG:32632', '+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs', {
            resolutions: [2800, 1400, 700, 350, 175, 84, 42, 21, 11.2, 5.6, 2.8, 1.4, 0.7, 0.35, 0.14, 0.07],
        });
        var map = L.map('map', {center: [5.1284, 7.3626], zoom: 17}, {
            crs: crs,
            continuousWorld: false,
            worldCopyJump: false, 
            zoomControl:true, maxZoom:28, minZoom:1
        }).fitBounds([[5.125837848112332,7.357483231001971],[5.131609423389984,7.370063433123861]]);
        var hash = new L.Hash(map);
        map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
        var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
        L.control.locate({locateOptions: {maxZoom: 19}}).addTo(map);
        var measureControl = new L.Control.Measure({
            position: 'topleft',
            primaryLengthUnit: 'meters',
            secondaryLengthUnit: 'kilometers',
            primaryAreaUnit: 'sqmeters',
            secondaryAreaUnit: 'hectares'
        });
        measureControl.addTo(map);
        document.getElementsByClassName('leaflet-control-measure-toggle')[0]
        .innerHTML = '';
        document.getElementsByClassName('leaflet-control-measure-toggle')[0]
        .className += ' fas fa-ruler';
        var bounds_group = new L.featureGroup([]);
        function setBounds() {
        }
        map.createPane('pane_googlemaps_0');
        map.getPane('pane_googlemaps_0').style.zIndex = 400;

        var layer_googlemaps_0 = L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
            pane: 'pane_googlemaps_0',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
            minNativeZoom: 0,
            maxNativeZoom: 18
        }).addTo(map);
        
        layer_googlemaps_0;
        map.addLayer(layer_googlemaps_0);
        map.createPane('pane_DTM_1');
        map.getPane('pane_DTM_1').style.zIndex = 401;
        var img_DTM_1 = 'data/DTM_1.png';
        var img_bounds_DTM_1 = [[5.1266038781167875,7.360418838313251],[5.1295461384062415,7.365255607139718]];
        var layer_DTM_1 = new L.imageOverlay(img_DTM_1,
                                              img_bounds_DTM_1,
                                              {pane: 'pane_DTM_1'});
        bounds_group.addLayer(layer_DTM_1);
        map.addLayer(layer_DTM_1);
        function pop_Spot_Heights_2(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['fid'] !== null ? autolinker.link(feature.properties['fid'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(feature.properties['id'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Northing(m'] !== null ? autolinker.link(feature.properties['Northing(m'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Easting(m)'] !== null ? autolinker.link(feature.properties['Easting(m)'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Z'] !== null ? autolinker.link(feature.properties['Z'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Spot_Heights_2_0() {
            return {
                pane: 'pane_Spot_Heights_2',
                radius: 0.002,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(35,25,22,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_Spot_Heights_2');
        map.getPane('pane_Spot_Heights_2').style.zIndex = 402;
        map.getPane('pane_Spot_Heights_2').style['mix-blend-mode'] = 'normal';
        var layer_Spot_Heights_2 = new L.geoJson(json_Spot_Heights_2, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Spot_Heights_2',
            layerName: 'layer_Spot_Heights_2',
            pane: 'pane_Spot_Heights_2',
            onEachFeature: pop_Spot_Heights_2,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.circleMarker(latlng, style_Spot_Heights_2_0(feature));
            },
        });
        bounds_group.addLayer(layer_Spot_Heights_2);
        map.addLayer(layer_Spot_Heights_2);
        function pop_Contour_3(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['fid'] !== null ? autolinker.link(feature.properties['fid'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['index'] !== null ? autolinker.link(feature.properties['index'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['expression'] !== null ? autolinker.link(feature.properties['expression'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['label'] !== null ? autolinker.link(feature.properties['label'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Contour_3_0() {
            return {
                pane: 'pane_Contour_3',
                opacity: 1,
                color: 'rgba(125,139,143,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 1.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_Contour_3');
        map.getPane('pane_Contour_3').style.zIndex = 403;
        map.getPane('pane_Contour_3').style['mix-blend-mode'] = 'normal';
        var layer_Contour_3 = new L.geoJson(json_Contour_3, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Contour_3',
            layerName: 'layer_Contour_3',
            pane: 'pane_Contour_3',
            onEachFeature: pop_Contour_3,
            style: style_Contour_3_0,
        });
        bounds_group.addLayer(layer_Contour_3);
        map.addLayer(layer_Contour_3);
        function pop_Perimeter_4(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">fid</th>\
                        <td>' + (feature.properties['fid'] !== null ? autolinker.link(feature.properties['fid'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">AREA (HA)</th>\
                        <td>' + (feature.properties['AREA (HA)'] !== null ? autolinker.link(feature.properties['AREA (HA)'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Name</th>\
                        <td>' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Image_Path'] !== null ? '<img src="images/' + String(feature.properties['Image_Path']).replace(/[\\\/:]/g, '_').trim() + '">' : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Perimeter_4_0() {
            return {
                pane: 'pane_Perimeter_4',
                opacity: 1,
                color: 'rgba(228,26,28,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_Perimeter_4');
        map.getPane('pane_Perimeter_4').style.zIndex = 404;
        map.getPane('pane_Perimeter_4').style['mix-blend-mode'] = 'normal';
        var layer_Perimeter_4 = new L.geoJson(json_Perimeter_4, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Perimeter_4',
            layerName: 'layer_Perimeter_4',
            pane: 'pane_Perimeter_4',
            onEachFeature: pop_Perimeter_4,
            style: style_Perimeter_4_0,
        });
        bounds_group.addLayer(layer_Perimeter_4);
        map.addLayer(layer_Perimeter_4);
        function pop_Flyover_5(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">fid</th>\
                        <td>' + (feature.properties['fid'] !== null ? autolinker.link(feature.properties['fid'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>Name</strong><br />' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Image_Path'] !== null ? '<img src="images/' + String(feature.properties['Image_Path']).replace(/[\\\/:]/g, '_').trim() + '">' : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Flyover_5_0() {
            return {
                pane: 'pane_Flyover_5',
                opacity: 1,
                color: 'rgb(255, 255, 0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgb(255, 255, 0)',
                interactive: true,
            }
        }
        map.createPane('pane_Flyover_5');
        map.getPane('pane_Flyover_5').style.zIndex = 405;
        map.getPane('pane_Flyover_5').style['mix-blend-mode'] = 'normal';
        var layer_Flyover_5 = new L.geoJson(json_Flyover_5, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Flyover_5',
            layerName: 'layer_Flyover_5',
            pane: 'pane_Flyover_5',
            onEachFeature: pop_Flyover_5,
            style: style_Flyover_5_0,
        });
        bounds_group.addLayer(layer_Flyover_5);
        map.addLayer(layer_Flyover_5);
        function pop_Gate_6(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">fid</th>\
                        <td>' + (feature.properties['fid'] !== null ? autolinker.link(feature.properties['fid'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">id</th>\
                        <td>' + (feature.properties['id'] !== null ? autolinker.link(feature.properties['id'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Gate</th>\
                        <td>' + (feature.properties['Gate'] !== null ? autolinker.link(feature.properties['Gate'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Image_Path'] !== null ? '<img src="images/' + String(feature.properties['Image_Path']).replace(/[\\\/:]/g, '_').trim() + '">' : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Gate_6_0() {
            return {
                pane: 'pane_Gate_6',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(229,182,54,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_Gate_6');
        map.getPane('pane_Gate_6').style.zIndex = 406;
        map.getPane('pane_Gate_6').style['mix-blend-mode'] = 'normal';
        var layer_Gate_6 = new L.geoJson(json_Gate_6, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Gate_6',
            layerName: 'layer_Gate_6',
            pane: 'pane_Gate_6',
            onEachFeature: pop_Gate_6,
            style: style_Gate_6_0,
        });
        bounds_group.addLayer(layer_Gate_6);
        map.addLayer(layer_Gate_6);
        function pop_Field_Court_Pitch_7(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">fid</th>\
                        <td>' + (feature.properties['fid'] !== null ? autolinker.link(feature.properties['fid'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">id</th>\
                        <td>' + (feature.properties['id'] !== null ? autolinker.link(feature.properties['id'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Name</th>\
                        <td>' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Image_Path'] !== null ? '<img src="images/' + String(feature.properties['Image_Path']).replace(/[\\\/:]/g, '_').trim() + '">' : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Field_Court_Pitch_7_0(feature) {
            switch(String(feature.properties['Name'])) {
                case 'Basketball_Court':
                    return {
                pane: 'pane_Field_Court_Pitch_7',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(215,209,16,1.0)',
                interactive: true,
            }
                    break;
                case 'School_Field':
                    return {
                pane: 'pane_Field_Court_Pitch_7',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(1,115,0,1.0)',
                interactive: true,
            }
                    break;
                case 'VolleyBall_Pitch':
                    return {
                pane: 'pane_Field_Court_Pitch_7',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(225,152,100,1.0)',
                interactive: true,
            }
                    break;
                default:
                    return {
                pane: 'pane_Field_Court_Pitch_7',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(202,109,210,1.0)',
                interactive: true,
            }
                    break;
            }
        }
        map.createPane('pane_Field_Court_Pitch_7');
        map.getPane('pane_Field_Court_Pitch_7').style.zIndex = 407;
        map.getPane('pane_Field_Court_Pitch_7').style['mix-blend-mode'] = 'normal';
        var layer_Field_Court_Pitch_7 = new L.geoJson(json_Field_Court_Pitch_7, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Field_Court_Pitch_7',
            layerName: 'layer_Field_Court_Pitch_7',
            pane: 'pane_Field_Court_Pitch_7',
            onEachFeature: pop_Field_Court_Pitch_7,
            style: style_Field_Court_Pitch_7_0,
        });
        bounds_group.addLayer(layer_Field_Court_Pitch_7);
        map.addLayer(layer_Field_Court_Pitch_7);
        function pop_Roads_8(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">name</th>\
                        <td>' + (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">type</th>\
                        <td>' + (feature.properties['type'] !== null ? autolinker.link(feature.properties['type'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['oneway'] !== null ? autolinker.link(feature.properties['oneway'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">ID</th>\
                        <td>' + (feature.properties['ID'] !== null ? autolinker.link(feature.properties['ID'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Roads_8_0() {
            return {
                pane: 'pane_Roads_8',
                opacity: 1,
                color: 'rgba(3,2,2,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 1.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_Roads_8');
        map.getPane('pane_Roads_8').style.zIndex = 408;
        map.getPane('pane_Roads_8').style['mix-blend-mode'] = 'normal';
        var layer_Roads_8 = new L.geoJson(json_Roads_8, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Roads_8',
            layerName: 'layer_Roads_8',
            pane: 'pane_Roads_8',
            onEachFeature: pop_Roads_8,
            style: style_Roads_8_0,
        });
        bounds_group.addLayer(layer_Roads_8);
        map.addLayer(layer_Roads_8);
        function pop_Buildings_9(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Name</th>\
                        <td>' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Type</th>\
                        <td>' + (feature.properties['Type'] !== null ? autolinker.link(feature.properties['Type'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['ID'] !== null ? autolinker.link(feature.properties['ID'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Image_Path'] !== null ? '<img src="images/' + String(feature.properties['Image_Path']).replace(/[\\\/:]/g, '_').trim() + '">' : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Buildings_9_0(feature) {
            switch(String(feature.properties['Type'])) {
                case 'Bungalow':
                    return {
                pane: 'pane_Buildings_9',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(218,132,33,1.0)',
                interactive: true,
            }
                    break;
                case 'Galery_Deck':
                    return {
                pane: 'pane_Buildings_9',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(85,87,201,1.0)',
                interactive: true,
            }
                    break;
                case 'One_Deck':
                    return {
                pane: 'pane_Buildings_9',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(200,85,121,1.0)',
                interactive: true,
            }
                    break;
                case 'Slope':
                    return {
                pane: 'pane_Buildings_9',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(200,85,121,1.0)',
                interactive: true,
            }
                    break;
                case 'Three_Deck':
                    return {
                pane: 'pane_Buildings_9',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(110,212,223,1.0)',
                interactive: true,
            }
                    break;
                case 'Two_Deck':
                    return {
                pane: 'pane_Buildings_9',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(203,68,230,1.0)',
                interactive: true,
            }
                    break;
                default:
                    return {
                pane: 'pane_Buildings_9',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(72,223,110,1.0)',
                interactive: true,
            }
                    break;
            }
        }
        map.createPane('pane_Buildings_9');
        map.getPane('pane_Buildings_9').style.zIndex = 409;
        map.getPane('pane_Buildings_9').style['mix-blend-mode'] = 'normal';
        var layer_Buildings_9 = new L.geoJson(json_Buildings_9, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Buildings_9',
            layerName: 'layer_Buildings_9',
            pane: 'pane_Buildings_9',
            onEachFeature: pop_Buildings_9,
            style: style_Buildings_9_0,
        });
        bounds_group.addLayer(layer_Buildings_9);
        map.addLayer(layer_Buildings_9);
        var osmGeocoder = new L.Control.Geocoder({
            collapsed: true,
            position: 'topleft',
            text: 'Search',
            title: 'Testing'
        }).addTo(map);
        document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
        .className += ' fa fa-search';
        document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
        .title += 'Search for a place';
        var baseMaps = {};
        L.control.layers(baseMaps,{'<strong>LEGEND</strong><br>Buildings<br /><table><tr><td style="text-align: center;"><img src="legend/Buildings_9_Bungalow0.png" /></td><td>Bungalow</td></tr><tr><td style="text-align: center;"><img src="legend/Buildings_9_GaleryDeck1.png" /></td><td>Galery_Deck</td></tr><tr><td style="text-align: center;"><img src="legend/Buildings_9_OneDeck2.png" /></td><td>One_Deck</td></tr><tr><td style="text-align: center;"><img src="legend/Buildings_9_ThreeDeck4.png" /></td><td>Three_Deck</td></tr><tr><td style="text-align: center;"><img src="legend/Buildings_9_TwoDeck5.png" /></td><td>Two_Deck</td></tr><tr><td></td></tr></table>': layer_Buildings_9,'<img src="legend/Roads_8.png" /> Roads': layer_Roads_8,'Field_Court_Pitch<br /><table><tr><td style="text-align: center;"><img src="legend/Field_Court_Pitch_7_BasketballCourt0.png" /></td><td>Basketball_Court</td></tr><tr><td style="text-align: center;"><img src="legend/Field_Court_Pitch_7_SchoolField1.png" /></td><td>School_Field</td></tr><tr><td style="text-align: center;"><img src="legend/Field_Court_Pitch_7_VolleyBallPitch2.png" /></td><td>VolleyBall_Pitch</td></tr><tr><td style="text-align: center;"><img src="legend/Field_Court_Pitch_7_3.png" /></td><td></td></tr></table>': layer_Field_Court_Pitch_7,'<img src="legend/Gate_6.png" /> Gate': layer_Gate_6,'<img src="legend/Flyover_5.png" /> Flyover': layer_Flyover_5,'<img src="legend/Perimeter_4.png" /> Perimeter': layer_Perimeter_4,'<img src="legend/Contour_3.png" /> Contour': layer_Contour_3,'<img src="legend/Spot_Heights_2.png" /> Spot_Heights': layer_Spot_Heights_2,'<tr><td "style = text-align: center;">DTM</td><br><td "style = display:fit-content;">87.49</td><br><td style="text-align: center;"><img src="legend/DTM.png" /><td>77.53</td></td></tr>': layer_DTM_1,"google maps": layer_googlemaps_0,}).addTo(map);
        setBounds();
        var i = 0;
        layer_Spot_Heights_2.eachLayer(function(layer) {
            var context = {
                feature: layer.feature,
                variables: {}
            };
            layer.bindTooltip((layer.feature.properties['Z'] !== null?String('<div style="color: #000000; font-size: 5pt; font-family: \'MS Shell Dlg 2\', sans-serif;">' + layer.feature.properties['Z']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_Spot_Heights_2'});
            labels.push(layer);
            totalMarkers += 1;
              layer.added = true;
              addLabel(layer, i);
              i++;
        });
        var i = 0;
        layer_Flyover_5.eachLayer(function(layer) {
            var context = {
                feature: layer.feature,
                variables: {}
            };
            layer.bindTooltip((layer.feature.properties['Name'] !== null?String('<div style="color: #000000; font-size: 5pt; font-family: \'MS Shell Dlg 2\', sans-serif;">' + layer.feature.properties['Name']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_Flyover_5'});
            labels.push(layer);
            totalMarkers += 1;
              layer.added = true;
              addLabel(layer, i);
              i++;
        });
        var i = 0;
        layer_Field_Court_Pitch_7.eachLayer(function(layer) {
            var context = {
                feature: layer.feature,
                variables: {}
            };
            layer.bindTooltip((layer.feature.properties['Name'] !== null?String('<div style="color: #000000; font-size: 5pt; font-family: \'MS Shell Dlg 2\', sans-serif;">' + layer.feature.properties['Name']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_Field_Court_Pitch_7'});
            labels.push(layer);
            totalMarkers += 1;
              layer.added = true;
              addLabel(layer, i);
              i++;
        });
        var i = 0;
        layer_Roads_8.eachLayer(function(layer) {
            var context = {
                feature: layer.feature,
                variables: {}
            };
            layer.bindTooltip((layer.feature.properties['name'] !== null?String('<div style="color: #000000; font-size: 6pt; font-family: \'MS Shell Dlg 2\', sans-serif;">' + layer.feature.properties['name']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_Roads_8'});
            labels.push(layer);
            totalMarkers += 1;
              layer.added = true;
              addLabel(layer, i);
              i++;
        });
        var i = 0;
        layer_Buildings_9.eachLayer(function(layer) {
            var context = {
                feature: layer.feature,
                variables: {}
            };
            layer.bindTooltip((layer.feature.properties['Name'] !== null?String('<div style="color: #000000; font-size: 5pt; font-family: \'MS Shell Dlg 2\', sans-serif;">' + layer.feature.properties['Name']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_Buildings_9'});
            labels.push(layer);
            totalMarkers += 1;
              layer.added = true;
              addLabel(layer, i);
              i++;
        });
        map.addControl(new L.Control.Search({
            layer: layer_Buildings_9,
            initial: false,
            hideMarkerOnCollapse: true,
            propertyName: 'Name'}));
        document.getElementsByClassName('search-button')[0].className +=
         ' fa fa-binoculars';
        L.ImageOverlay.include({
            getBounds: function () {
                return this._bounds;
            }
        });
        resetLabels([layer_Spot_Heights_2,layer_Flyover_5,layer_Field_Court_Pitch_7,layer_Roads_8,layer_Buildings_9]);
        map.on("zoomend", function(){
            resetLabels([layer_Spot_Heights_2,layer_Flyover_5,layer_Field_Court_Pitch_7,layer_Roads_8,layer_Buildings_9]);
        });
        map.on("layeradd", function(){
            resetLabels([layer_Spot_Heights_2,layer_Flyover_5,layer_Field_Court_Pitch_7,layer_Roads_8,layer_Buildings_9]);
        });
        map.on("layerremove", function(){
            resetLabels([layer_Spot_Heights_2,layer_Flyover_5,layer_Field_Court_Pitch_7,layer_Roads_8,layer_Buildings_9]);
        });

        showCoordinates = function(ev) {
            var latlng = map.mouseEventToLatLng(ev.originalEvent);
            var lat = Math.round(latlng.lat * 1000000) / 1000000;
            var lng = Math.round(latlng.lng * 1000000)/1000000;
            $("#showCoordinates").text(lat + ", " + lng)
        }

        captureCoordinates = function(ev) {
            var latlng = map.mouseEventToLatLng(ev.originalEvent);
            var lat = Math.round(latlng.lat * 1000000) / 1000000;
            var lng = Math.round(latlng.lng * 1000000)/1000000;
            $("#captureCoordinates").text(lat + ", " + lng)
        }
            
        
        $("#map").on("mousemove", showCoordinates);
        $("#map").on("click", captureCoordinates);
            
        
