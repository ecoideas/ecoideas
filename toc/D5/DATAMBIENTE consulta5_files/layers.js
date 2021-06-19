var wms_layers = [];

var format_reservaforestalprotectoraproductora138456_0 = new ol.format.GeoJSON();
var features_reservaforestalprotectoraproductora138456_0 = format_reservaforestalprotectoraproductora138456_0.readFeatures(json_reservaforestalprotectoraproductora138456_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reservaforestalprotectoraproductora138456_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reservaforestalprotectoraproductora138456_0.addFeatures(features_reservaforestalprotectoraproductora138456_0);
var lyr_reservaforestalprotectoraproductora138456_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reservaforestalprotectoraproductora138456_0, 
                style: style_reservaforestalprotectoraproductora138456_0,
                interactive: true,
                title: '<img src="styles/legend/reservaforestalprotectoraproductora138456_0.png" /> reserva forestal protectora productora 138456'
            });
var format_DIFERENCIA_1 = new ol.format.GeoJSON();
var features_DIFERENCIA_1 = format_DIFERENCIA_1.readFeatures(json_DIFERENCIA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIFERENCIA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIFERENCIA_1.addFeatures(features_DIFERENCIA_1);
var lyr_DIFERENCIA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIFERENCIA_1, 
                style: style_DIFERENCIA_1,
                interactive: true,
                title: '<img src="styles/legend/DIFERENCIA_1.png" /> DIFERENCIA'
            });
var format_polmin_2 = new ol.format.GeoJSON();
var features_polmin_2 = format_polmin_2.readFeatures(json_polmin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polmin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polmin_2.addFeatures(features_polmin_2);
var lyr_polmin_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_polmin_2, 
                style: style_polmin_2,
                interactive: true,
                title: '<img src="styles/legend/polmin_2.png" /> polmin'
            });
var format_USOACTUALDELSUELO_3 = new ol.format.GeoJSON();
var features_USOACTUALDELSUELO_3 = format_USOACTUALDELSUELO_3.readFeatures(json_USOACTUALDELSUELO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USOACTUALDELSUELO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USOACTUALDELSUELO_3.addFeatures(features_USOACTUALDELSUELO_3);
var lyr_USOACTUALDELSUELO_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_USOACTUALDELSUELO_3, 
                style: style_USOACTUALDELSUELO_3,
                interactive: true,
    title: 'USO ACTUAL DEL SUELO<br />\
    <img src="styles/legend/USOACTUALDELSUELO_3_0.png" /> Agropecuaria tradicional<br />\
    <img src="styles/legend/USOACTUALDELSUELO_3_1.png" /> Agropecuario Intensivo<br />\
    <img src="styles/legend/USOACTUALDELSUELO_3_2.png" /> Area Actividad Industrial<br />\
    <img src="styles/legend/USOACTUALDELSUELO_3_3.png" /> Area de proteccion arqueologica<br />\
    <img src="styles/legend/USOACTUALDELSUELO_3_4.png" /> Area de Proteccion de Infraestructura de Servicios Publicos<br />\
    <img src="styles/legend/USOACTUALDELSUELO_3_5.png" /> Bosque protector<br />\
    <img src="styles/legend/USOACTUALDELSUELO_3_6.png" /> Bosque protector-productor<br />\
    <img src="styles/legend/USOACTUALDELSUELO_3_7.png" /> Centros poblados rurales<br />\
    <img src="styles/legend/USOACTUALDELSUELO_3_8.png" /> Centros poblados urbanos<br />\
    <img src="styles/legend/USOACTUALDELSUELO_3_9.png" /> Corredor Vial rural<br />\
    <img src="styles/legend/USOACTUALDELSUELO_3_10.png" /> Cuerpos de Agua<br />\
    <img src="styles/legend/USOACTUALDELSUELO_3_11.png" /> Expansion Urbana<br />\
    <img src="styles/legend/USOACTUALDELSUELO_3_12.png" /> Instalaciones Recreativas<br />\
    <img src="styles/legend/USOACTUALDELSUELO_3_13.png" /> Institucional<br />\
    <img src="styles/legend/USOACTUALDELSUELO_3_14.png" /> Ronda P.<br />\
    <img src="styles/legend/USOACTUALDELSUELO_3_15.png" /> Ronda Q.<br />\
    <img src="styles/legend/USOACTUALDELSUELO_3_16.png" /> Ronda Rio<br />\
    <img src="styles/legend/USOACTUALDELSUELO_3_17.png" /> Vivienda Campestre<br />\
    <img src="styles/legend/USOACTUALDELSUELO_3_18.png" /> Zonas de ExtracciĂłn Minera<br />\
    <img src="styles/legend/USOACTUALDELSUELO_3_19.png" /> ZUrbana<br />\
    <img src="styles/legend/USOACTUALDELSUELO_3_20.png" /> <br />'
        });
var format_Casos_4 = new ol.format.GeoJSON();
var features_Casos_4 = format_Casos_4.readFeatures(json_Casos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casos_4.addFeatures(features_Casos_4);
var lyr_Casos_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Casos_4, 
                style: style_Casos_4,
                interactive: true,
                title: '<img src="styles/legend/Casos_4.png" /> Casos'
            });
var format_Educacionambiental_5 = new ol.format.GeoJSON();
var features_Educacionambiental_5 = format_Educacionambiental_5.readFeatures(json_Educacionambiental_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Educacionambiental_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Educacionambiental_5.addFeatures(features_Educacionambiental_5);
var lyr_Educacionambiental_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Educacionambiental_5, 
                style: style_Educacionambiental_5,
                interactive: true,
                title: '<img src="styles/legend/Educacionambiental_5.png" /> Educacion ambiental'
            });
var format_Industria_6 = new ol.format.GeoJSON();
var features_Industria_6 = format_Industria_6.readFeatures(json_Industria_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industria_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industria_6.addFeatures(features_Industria_6);
var lyr_Industria_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Industria_6, 
                style: style_Industria_6,
                interactive: true,
                title: '<img src="styles/legend/Industria_6.png" /> Industria'
            });

lyr_reservaforestalprotectoraproductora138456_0.setVisible(true);lyr_DIFERENCIA_1.setVisible(true);lyr_polmin_2.setVisible(true);lyr_USOACTUALDELSUELO_3.setVisible(true);lyr_Casos_4.setVisible(true);lyr_Educacionambiental_5.setVisible(true);lyr_Industria_6.setVisible(true);
var layersList = [lyr_reservaforestalprotectoraproductora138456_0,lyr_DIFERENCIA_1,lyr_polmin_2,lyr_USOACTUALDELSUELO_3,lyr_Casos_4,lyr_Educacionambiental_5,lyr_Industria_6];
lyr_reservaforestalprotectoraproductora138456_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'codigo': 'codigo', 'sector_cod': 'sector_cod', 'nombre': 'nombre', 'codigo_ant': 'codigo_ant', 'usuario_lo': 'usuario_lo', 'fecha_log': 'fecha_log', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_DIFERENCIA_1.set('fieldAliases', {'FID': 'FID', });
lyr_polmin_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'AREA': 'AREA', 'DESCRIPCIO': 'DESCRIPCIO', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'area_1': 'area_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_USOACTUALDELSUELO_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'VER_ID': 'VER_ID', 'PRUR_ID': 'PRUR_ID', 'CTERB': 'CTERB', 'BJECTID_1B': 'BJECTID_1B', 'MUNICIPIO': 'MUNICIPIO', 'ZONA': 'ZONA', 'MANZANA': 'MANZANA', 'PREDIO': 'PREDIO', 'NUMERO_ORD': 'NUMERO_ORD', 'TOTAL_REGI': 'TOTAL_REGI', 'NOMBRE': 'NOMBRE', 'TIPO_DOCUM': 'TIPO_DOCUM', 'NUMERO_DOC': 'NUMERO_DOC', 'DIRECCION': 'DIRECCION', 'AREA_TERRE': 'AREA_TERRE', 'AREA_CONST': 'AREA_CONST', 'AVALUO': 'AVALUO', 'CCATASTRAL': 'CCATASTRAL', 'USO': 'USO', 'CUBEWRTURA': 'CUBEWRTURA', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Casos_4.set('fieldAliases', {'RADICADO': 'RADICADO', 'FECHA': 'FECHA', 'TIPO': 'TIPO', 'SITIO': 'SITIO', 'RESULTADO': 'RESULTADO', 'DENUCIANTE': 'DENUCIANTE', 'DENUNCIADO': 'DENUNCIADO', 'MAGNITUD': 'MAGNITUD', 'X': 'X', 'Y': 'Y', 'OBSERVACIONES': 'OBSERVACIONES', });
lyr_Educacionambiental_5.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', 'CURSOS': 'CURSOS', 'TEMAS': 'TEMAS', '2019': '2019', 'TIPO': 'TIPO', 'COBERTURA': 'COBERTURA', });
lyr_Industria_6.set('fieldAliases', {'Item': 'Item', 'x': 'x', 'y': 'y', 'Raz�n so': 'Raz�n so', 'NIT': 'NIT', });
lyr_reservaforestalprotectoraproductora138456_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'codigo': 'TextEdit', 'sector_cod': 'TextEdit', 'nombre': 'TextEdit', 'codigo_ant': 'TextEdit', 'usuario_lo': 'TextEdit', 'fecha_log': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_DIFERENCIA_1.set('fieldImages', {'FID': 'TextEdit', });
lyr_polmin_2.set('fieldImages', {'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'OBJECTID': 'Range', 'ID': 'TextEdit', 'AREA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'area_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_USOACTUALDELSUELO_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'VER_ID': 'TextEdit', 'PRUR_ID': 'TextEdit', 'CTERB': 'TextEdit', 'BJECTID_1B': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'ZONA': 'TextEdit', 'MANZANA': 'TextEdit', 'PREDIO': 'TextEdit', 'NUMERO_ORD': 'TextEdit', 'TOTAL_REGI': 'TextEdit', 'NOMBRE': 'TextEdit', 'TIPO_DOCUM': 'TextEdit', 'NUMERO_DOC': 'TextEdit', 'DIRECCION': 'TextEdit', 'AREA_TERRE': 'TextEdit', 'AREA_CONST': 'TextEdit', 'AVALUO': 'TextEdit', 'CCATASTRAL': 'TextEdit', 'USO': 'TextEdit', 'CUBEWRTURA': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'HECTARES': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Casos_4.set('fieldImages', {'RADICADO': 'Range', 'FECHA': 'TextEdit', 'TIPO': 'TextEdit', 'SITIO': 'TextEdit', 'RESULTADO': 'TextEdit', 'DENUCIANTE': 'TextEdit', 'DENUNCIADO': 'TextEdit', 'MAGNITUD': 'TextEdit', 'X': 'Range', 'Y': 'Range', 'OBSERVACIONES': 'TextEdit', });
lyr_Educacionambiental_5.set('fieldImages', {'id': '', 'NOMBRE': '', 'CURSOS': '', 'TEMAS': '', '2019': '', 'TIPO': '', 'COBERTURA': '', });
lyr_Industria_6.set('fieldImages', {'Item': '', 'x': '', 'y': '', 'Raz�n so': '', 'NIT': '', });
lyr_reservaforestalprotectoraproductora138456_0.set('fieldLabels', {'OBJECTID': 'no label', 'codigo': 'no label', 'sector_cod': 'no label', 'nombre': 'no label', 'codigo_ant': 'no label', 'usuario_lo': 'no label', 'fecha_log': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', });
lyr_DIFERENCIA_1.set('fieldLabels', {'FID': 'no label', });
lyr_polmin_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'AREA': 'no label', 'DESCRIPCIO': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'area_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_USOACTUALDELSUELO_3.set('fieldLabels', {'OBJECTID': 'no label', 'VER_ID': 'no label', 'PRUR_ID': 'no label', 'CTERB': 'no label', 'BJECTID_1B': 'no label', 'MUNICIPIO': 'no label', 'ZONA': 'no label', 'MANZANA': 'no label', 'PREDIO': 'no label', 'NUMERO_ORD': 'no label', 'TOTAL_REGI': 'no label', 'NOMBRE': 'no label', 'TIPO_DOCUM': 'no label', 'NUMERO_DOC': 'no label', 'DIRECCION': 'no label', 'AREA_TERRE': 'no label', 'AREA_CONST': 'no label', 'AVALUO': 'no label', 'CCATASTRAL': 'no label', 'USO': 'inline label', 'CUBEWRTURA': 'header label', 'AREA': 'no label', 'PERIMETER': 'no label', 'HECTARES': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Casos_4.set('fieldLabels', {'RADICADO': 'inline label', 'FECHA': 'no label', 'TIPO': 'inline label', 'SITIO': 'no label', 'RESULTADO': 'no label', 'DENUCIANTE': 'no label', 'DENUNCIADO': 'no label', 'MAGNITUD': 'no label', 'X': 'no label', 'Y': 'no label', 'OBSERVACIONES': 'no label', });
lyr_Educacionambiental_5.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'inline label', 'CURSOS': 'no label', 'TEMAS': 'no label', '2019': 'no label', 'TIPO': 'no label', 'COBERTURA': 'no label', });
lyr_Industria_6.set('fieldLabels', {'Item': 'no label', 'x': 'no label', 'y': 'no label', 'Raz�n so': 'inline label', 'NIT': 'no label', });
lyr_Industria_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});