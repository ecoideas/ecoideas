var wms_layers = [];

var lyr_imggeorrefer_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "imggeorrefer",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/imggeorrefer_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8188830.299170, 570794.061013, -8184612.819707, 574700.432888]
                            })
                        });
var format_RealinderacionRFPPCARBRes138Res456_1 = new ol.format.GeoJSON();
var features_RealinderacionRFPPCARBRes138Res456_1 = format_RealinderacionRFPPCARBRes138Res456_1.readFeatures(json_RealinderacionRFPPCARBRes138Res456_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RealinderacionRFPPCARBRes138Res456_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RealinderacionRFPPCARBRes138Res456_1.addFeatures(features_RealinderacionRFPPCARBRes138Res456_1);
var lyr_RealinderacionRFPPCARBRes138Res456_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RealinderacionRFPPCARBRes138Res456_1, 
                style: style_RealinderacionRFPPCARBRes138Res456_1,
                interactive: true,
                title: '<img src="styles/legend/RealinderacionRFPPCARBRes138Res456_1.png" /> Realinderacion RFPPCARB - Res 138 Res 456'
            });
var format_COBERTURA_2 = new ol.format.GeoJSON();
var features_COBERTURA_2 = format_COBERTURA_2.readFeatures(json_COBERTURA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COBERTURA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COBERTURA_2.addFeatures(features_COBERTURA_2);
var lyr_COBERTURA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COBERTURA_2, 
                style: style_COBERTURA_2,
                interactive: true,
    title: 'COBERTURA<br />\
    <img src="styles/legend/COBERTURA_2_0.png" /> Natural<br />\
    <img src="styles/legend/COBERTURA_2_1.png" /> Uso múltiple<br />\
    <img src="styles/legend/COBERTURA_2_2.png" /> <br />'
        });
var format_Curva_Nivel_3 = new ol.format.GeoJSON();
var features_Curva_Nivel_3 = format_Curva_Nivel_3.readFeatures(json_Curva_Nivel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curva_Nivel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curva_Nivel_3.addFeatures(features_Curva_Nivel_3);
var lyr_Curva_Nivel_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Curva_Nivel_3, 
                style: style_Curva_Nivel_3,
                interactive: true,
                title: '<img src="styles/legend/Curva_Nivel_3.png" /> Curva_Nivel'
            });
var format_REDLINEA_4 = new ol.format.GeoJSON();
var features_REDLINEA_4 = format_REDLINEA_4.readFeatures(json_REDLINEA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REDLINEA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REDLINEA_4.addFeatures(features_REDLINEA_4);
var lyr_REDLINEA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REDLINEA_4, 
                style: style_REDLINEA_4,
                interactive: true,
                title: '<img src="styles/legend/REDLINEA_4.png" /> RED LINEA'
            });
var format_dv_Municipio_5 = new ol.format.GeoJSON();
var features_dv_Municipio_5 = format_dv_Municipio_5.readFeatures(json_dv_Municipio_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dv_Municipio_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dv_Municipio_5.addFeatures(features_dv_Municipio_5);
var lyr_dv_Municipio_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dv_Municipio_5, 
                style: style_dv_Municipio_5,
                interactive: true,
                title: '<img src="styles/legend/dv_Municipio_5.png" /> dv_Municipio'
            });
var format_puntos_6 = new ol.format.GeoJSON();
var features_puntos_6 = format_puntos_6.readFeatures(json_puntos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntos_6.addFeatures(features_puntos_6);
var lyr_puntos_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_puntos_6, 
                style: style_puntos_6,
                interactive: true,
                title: '<img src="styles/legend/puntos_6.png" /> puntos'
            });
var format_puntosporpredio_7 = new ol.format.GeoJSON();
var features_puntosporpredio_7 = format_puntosporpredio_7.readFeatures(json_puntosporpredio_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntosporpredio_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntosporpredio_7.addFeatures(features_puntosporpredio_7);
var lyr_puntosporpredio_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_puntosporpredio_7, 
                style: style_puntosporpredio_7,
                interactive: true,
                title: '<img src="styles/legend/puntosporpredio_7.png" /> puntos por predio'
            });
var format_Export_Output_8 = new ol.format.GeoJSON();
var features_Export_Output_8 = format_Export_Output_8.readFeatures(json_Export_Output_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Output_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_8.addFeatures(features_Export_Output_8);
var lyr_Export_Output_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Export_Output_8, 
                style: style_Export_Output_8,
                interactive: true,
                title: '<img src="styles/legend/Export_Output_8.png" /> Export_Output'
            });
var format_Drenajes_9 = new ol.format.GeoJSON();
var features_Drenajes_9 = format_Drenajes_9.readFeatures(json_Drenajes_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drenajes_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drenajes_9.addFeatures(features_Drenajes_9);
var lyr_Drenajes_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Drenajes_9, 
                style: style_Drenajes_9,
                interactive: true,
                title: '<img src="styles/legend/Drenajes_9.png" /> Drenajes'
            });
var format_vias_10 = new ol.format.GeoJSON();
var features_vias_10 = format_vias_10.readFeatures(json_vias_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vias_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vias_10.addFeatures(features_vias_10);
var lyr_vias_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vias_10, 
                style: style_vias_10,
                interactive: true,
                title: '<img src="styles/legend/vias_10.png" /> vias'
            });

lyr_imggeorrefer_0.setVisible(true);lyr_RealinderacionRFPPCARBRes138Res456_1.setVisible(true);lyr_COBERTURA_2.setVisible(true);lyr_Curva_Nivel_3.setVisible(true);lyr_REDLINEA_4.setVisible(true);lyr_dv_Municipio_5.setVisible(true);lyr_puntos_6.setVisible(true);lyr_puntosporpredio_7.setVisible(true);lyr_Export_Output_8.setVisible(true);lyr_Drenajes_9.setVisible(true);lyr_vias_10.setVisible(true);
var layersList = [lyr_imggeorrefer_0,lyr_RealinderacionRFPPCARBRes138Res456_1,lyr_COBERTURA_2,lyr_Curva_Nivel_3,lyr_REDLINEA_4,lyr_dv_Municipio_5,lyr_puntos_6,lyr_puntosporpredio_7,lyr_Export_Output_8,lyr_Drenajes_9,lyr_vias_10];
lyr_RealinderacionRFPPCARBRes138Res456_1.set('fieldAliases', {'Categoria': 'Categoria', 'Area_ha': 'Area_ha', });
lyr_COBERTURA_2.set('fieldAliases', {'id': 'id', 'ID_2': 'ID_2', 'COBERTURA': 'COBERTURA', });
lyr_Curva_Nivel_3.set('fieldAliases', {'ALTURA_SOB': 'ALTURA_SOB', 'TIPO_CURVA': 'TIPO_CURVA', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'ISVISIBLE': 'ISVISIBLE', 'RULEID': 'RULEID', 'ID_MULTI': 'ID_MULTI', 'BK_MULTI': 'BK_MULTI', 'ESCALA': 'ESCALA', 'CAMBIO': 'CAMBIO', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RESPONSABL': 'RESPONSABL', 'PK_CUE': 'PK_CUE', 'ESCALA_150': 'ESCALA_150', 'ESCALA_200': 'ESCALA_200', 'ESCALA_300': 'ESCALA_300', 'ESCALA_350': 'ESCALA_350', 'ESCALA_400': 'ESCALA_400', 'ESCALA_500': 'ESCALA_500', 'ESCALA_750': 'ESCALA_750', 'ESCALA_100': 'ESCALA_100', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_REDLINEA_4.set('fieldAliases', {'id': 'id', 'DESCRIPC': 'DESCRIPC', });
lyr_dv_Municipio_5.set('fieldAliases', {'ID_ESPACIA': 'ID_ESPACIA', 'AREA_OFICI': 'AREA_OFICI', 'ENTIDAD_TE': 'ENTIDAD_TE', 'NOM_DEPART': 'NOM_DEPART', 'NOM_MUNICI': 'NOM_MUNICI', 'COD_DEPTO': 'COD_DEPTO', 'COD_DANE': 'COD_DANE', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_puntos_6.set('fieldAliases', {'ITEM': 'ITEM', 'PROPIETARI': 'PROPIETARI', 'CEDULA': 'CEDULA', 'NOMBRE DEL': 'NOMBRE DEL', 'CEDULA CAT': 'CEDULA CAT', 'F06': 'F06', 'CANT PERSO': 'CANT PERSO', 'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'VEREDA_COD': 'VEREDA_COD', 'NUMERO_SUB': 'NUMERO_SUB', 'GLOBALID': 'GLOBALID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'X': 'X', 'Y': 'Y', });
lyr_puntosporpredio_7.set('fieldAliases', {'ITEM': 'ITEM', 'PROPIETARI': 'PROPIETARI', 'CEDULA': 'CEDULA', 'NOMBRE DEL': 'NOMBRE DEL', 'CEDULA CAT': 'CEDULA CAT', 'F06': 'F06', 'CANT PERSO': 'CANT PERSO', 'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'VEREDA_COD': 'VEREDA_COD', 'NUMERO_SUB': 'NUMERO_SUB', 'GLOBALID': 'GLOBALID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'X': 'X', 'Y': 'Y', });
lyr_Export_Output_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'VEREDA_COD': 'VEREDA_COD', 'NUMERO_SUB': 'NUMERO_SUB', 'CODIGO_ANT': 'CODIGO_ANT', 'GLOBALID': 'GLOBALID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'ITEM': 'ITEM', 'PROPIETARIO': 'PROPIETARIO', 'CEDULA': 'CEDULA', 'NOMBRE DEL': 'NOMBRE DEL', 'F06': 'F06', 'CANT PERSON': 'CANT PERSON', });
lyr_Drenajes_9.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', });
lyr_vias_10.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', });
lyr_RealinderacionRFPPCARBRes138Res456_1.set('fieldImages', {'Categoria': '', 'Area_ha': '', });
lyr_COBERTURA_2.set('fieldImages', {'id': 'TextEdit', 'ID_2': 'Range', 'COBERTURA': 'TextEdit', });
lyr_Curva_Nivel_3.set('fieldImages', {'ALTURA_SOB': '', 'TIPO_CURVA': '', 'PROYECTO': '', 'SYMBOL': '', 'FECHA': '', 'ISVISIBLE': '', 'RULEID': '', 'ID_MULTI': '', 'BK_MULTI': '', 'ESCALA': '', 'CAMBIO': '', 'VIGENCIA': '', 'FECHA_MODI': '', 'RESPONSABL': '', 'PK_CUE': '', 'ESCALA_150': '', 'ESCALA_200': '', 'ESCALA_300': '', 'ESCALA_350': '', 'ESCALA_400': '', 'ESCALA_500': '', 'ESCALA_750': '', 'ESCALA_100': '', 'SHAPE_LEN': '', });
lyr_REDLINEA_4.set('fieldImages', {'id': 'TextEdit', 'DESCRIPC': 'TextEdit', });
lyr_dv_Municipio_5.set('fieldImages', {'ID_ESPACIA': 'TextEdit', 'AREA_OFICI': 'TextEdit', 'ENTIDAD_TE': 'TextEdit', 'NOM_DEPART': 'TextEdit', 'NOM_MUNICI': 'TextEdit', 'COD_DEPTO': 'TextEdit', 'COD_DANE': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_puntos_6.set('fieldImages', {'ITEM': 'TextEdit', 'PROPIETARI': 'TextEdit', 'CEDULA': 'TextEdit', 'NOMBRE DEL': 'TextEdit', 'CEDULA CAT': 'TextEdit', 'F06': 'TextEdit', 'CANT PERSO': 'TextEdit', 'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'VEREDA_COD': 'TextEdit', 'NUMERO_SUB': 'TextEdit', 'GLOBALID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_puntosporpredio_7.set('fieldImages', {'ITEM': '', 'PROPIETARI': '', 'CEDULA': '', 'NOMBRE DEL': '', 'CEDULA CAT': '', 'F06': '', 'CANT PERSO': '', 'OBJECTID': '', 'CODIGO': '', 'VEREDA_COD': '', 'NUMERO_SUB': '', 'GLOBALID': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'X': '', 'Y': '', });
lyr_Export_Output_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'VEREDA_COD': 'TextEdit', 'NUMERO_SUB': 'TextEdit', 'CODIGO_ANT': 'TextEdit', 'GLOBALID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'ITEM': 'TextEdit', 'PROPIETARIO': 'TextEdit', 'CEDULA': 'TextEdit', 'NOMBRE DEL': 'TextEdit', 'F06': 'TextEdit', 'CANT PERSON': 'TextEdit', });
lyr_Drenajes_9.set('fieldImages', {'ID': 'Range', 'Name': 'TextEdit', });
lyr_vias_10.set('fieldImages', {'ID': 'Range', 'Name': 'TextEdit', });
lyr_RealinderacionRFPPCARBRes138Res456_1.set('fieldLabels', {'Categoria': 'no label', 'Area_ha': 'no label', });
lyr_COBERTURA_2.set('fieldLabels', {'id': 'no label', 'ID_2': 'no label', 'COBERTURA': 'inline label', });
lyr_Curva_Nivel_3.set('fieldLabels', {'ALTURA_SOB': 'no label', 'TIPO_CURVA': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'ISVISIBLE': 'no label', 'RULEID': 'no label', 'ID_MULTI': 'no label', 'BK_MULTI': 'no label', 'ESCALA': 'no label', 'CAMBIO': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODI': 'no label', 'RESPONSABL': 'no label', 'PK_CUE': 'no label', 'ESCALA_150': 'no label', 'ESCALA_200': 'no label', 'ESCALA_300': 'no label', 'ESCALA_350': 'no label', 'ESCALA_400': 'no label', 'ESCALA_500': 'no label', 'ESCALA_750': 'no label', 'ESCALA_100': 'no label', 'SHAPE_LEN': 'no label', });
lyr_REDLINEA_4.set('fieldLabels', {'id': 'no label', 'DESCRIPC': 'no label', });
lyr_dv_Municipio_5.set('fieldLabels', {'ID_ESPACIA': 'no label', 'AREA_OFICI': 'no label', 'ENTIDAD_TE': 'no label', 'NOM_DEPART': 'no label', 'NOM_MUNICI': 'no label', 'COD_DEPTO': 'no label', 'COD_DANE': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_puntos_6.set('fieldLabels', {'ITEM': 'no label', 'PROPIETARI': 'no label', 'CEDULA': 'no label', 'NOMBRE DEL': 'no label', 'CEDULA CAT': 'no label', 'F06': 'no label', 'CANT PERSO': 'no label', 'OBJECTID': 'no label', 'CODIGO': 'no label', 'VEREDA_COD': 'no label', 'NUMERO_SUB': 'no label', 'GLOBALID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_puntosporpredio_7.set('fieldLabels', {'ITEM': 'no label', 'PROPIETARI': 'no label', 'CEDULA': 'no label', 'NOMBRE DEL': 'no label', 'CEDULA CAT': 'no label', 'F06': 'no label', 'CANT PERSO': 'no label', 'OBJECTID': 'no label', 'CODIGO': 'no label', 'VEREDA_COD': 'no label', 'NUMERO_SUB': 'no label', 'GLOBALID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Export_Output_8.set('fieldLabels', {'OBJECTID': 'no label', 'CODIGO': 'no label', 'VEREDA_COD': 'no label', 'NUMERO_SUB': 'no label', 'CODIGO_ANT': 'inline label', 'GLOBALID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'ITEM': 'no label', 'PROPIETARIO': 'no label', 'CEDULA': 'no label', 'NOMBRE DEL': 'no label', 'F06': 'no label', 'CANT PERSON': 'no label', });
lyr_Drenajes_9.set('fieldLabels', {'ID': 'no label', 'Name': 'no label', });
lyr_vias_10.set('fieldLabels', {'ID': 'no label', 'Name': 'no label', });
lyr_vias_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});