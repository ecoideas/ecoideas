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
var format_polmin_1 = new ol.format.GeoJSON();
var features_polmin_1 = format_polmin_1.readFeatures(json_polmin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polmin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polmin_1.addFeatures(features_polmin_1);
var lyr_polmin_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_polmin_1, 
                style: style_polmin_1,
                interactive: true,
                title: '<img src="styles/legend/polmin_1.png" /> polmin'
            });
var format_USOACTUALDELSUELO_2 = new ol.format.GeoJSON();
var features_USOACTUALDELSUELO_2 = format_USOACTUALDELSUELO_2.readFeatures(json_USOACTUALDELSUELO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USOACTUALDELSUELO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USOACTUALDELSUELO_2.addFeatures(features_USOACTUALDELSUELO_2);
var lyr_USOACTUALDELSUELO_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_USOACTUALDELSUELO_2, 
                style: style_USOACTUALDELSUELO_2,
                interactive: true,
    title: 'USO ACTUAL DEL SUELO<br />\
    <img src="styles/legend/USOACTUALDELSUELO_2_0.png" /> Agropecuaria tradicional<br />\
    <img src="styles/legend/USOACTUALDELSUELO_2_1.png" /> Agropecuario Intensivo<br />\
    <img src="styles/legend/USOACTUALDELSUELO_2_2.png" /> Area Actividad Industrial<br />\
    <img src="styles/legend/USOACTUALDELSUELO_2_3.png" /> Area de proteccion arqueologica<br />\
    <img src="styles/legend/USOACTUALDELSUELO_2_4.png" /> Area de Proteccion de Infraestructura de Servicios Publicos<br />\
    <img src="styles/legend/USOACTUALDELSUELO_2_5.png" /> Bosque protector<br />\
    <img src="styles/legend/USOACTUALDELSUELO_2_6.png" /> Bosque protector-productor<br />\
    <img src="styles/legend/USOACTUALDELSUELO_2_7.png" /> Centros poblados rurales<br />\
    <img src="styles/legend/USOACTUALDELSUELO_2_8.png" /> Centros poblados urbanos<br />\
    <img src="styles/legend/USOACTUALDELSUELO_2_9.png" /> Corredor Vial rural<br />\
    <img src="styles/legend/USOACTUALDELSUELO_2_10.png" /> Cuerpos de Agua<br />\
    <img src="styles/legend/USOACTUALDELSUELO_2_11.png" /> Expansion Urbana<br />\
    <img src="styles/legend/USOACTUALDELSUELO_2_12.png" /> Instalaciones Recreativas<br />\
    <img src="styles/legend/USOACTUALDELSUELO_2_13.png" /> Institucional<br />\
    <img src="styles/legend/USOACTUALDELSUELO_2_14.png" /> Ronda P.<br />\
    <img src="styles/legend/USOACTUALDELSUELO_2_15.png" /> Ronda Q.<br />\
    <img src="styles/legend/USOACTUALDELSUELO_2_16.png" /> Ronda Rio<br />\
    <img src="styles/legend/USOACTUALDELSUELO_2_17.png" /> Vivienda Campestre<br />\
    <img src="styles/legend/USOACTUALDELSUELO_2_18.png" /> Zonas de ExtracciĂłn Minera<br />\
    <img src="styles/legend/USOACTUALDELSUELO_2_19.png" /> ZUrbana<br />\
    <img src="styles/legend/USOACTUALDELSUELO_2_20.png" /> <br />'
        });
var format_Educacionambiental_3 = new ol.format.GeoJSON();
var features_Educacionambiental_3 = format_Educacionambiental_3.readFeatures(json_Educacionambiental_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Educacionambiental_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Educacionambiental_3.addFeatures(features_Educacionambiental_3);
var lyr_Educacionambiental_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Educacionambiental_3, 
                style: style_Educacionambiental_3,
                interactive: true,
                title: '<img src="styles/legend/Educacionambiental_3.png" /> Educacion ambiental'
            });
var format_Industria_4 = new ol.format.GeoJSON();
var features_Industria_4 = format_Industria_4.readFeatures(json_Industria_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industria_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industria_4.addFeatures(features_Industria_4);
var lyr_Industria_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Industria_4, 
                style: style_Industria_4,
                interactive: true,
                title: '<img src="styles/legend/Industria_4.png" /> Industria'
            });
var format_PREDIOSDELMUNICIPIO2016_5 = new ol.format.GeoJSON();
var features_PREDIOSDELMUNICIPIO2016_5 = format_PREDIOSDELMUNICIPIO2016_5.readFeatures(json_PREDIOSDELMUNICIPIO2016_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PREDIOSDELMUNICIPIO2016_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PREDIOSDELMUNICIPIO2016_5.addFeatures(features_PREDIOSDELMUNICIPIO2016_5);
var lyr_PREDIOSDELMUNICIPIO2016_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PREDIOSDELMUNICIPIO2016_5, 
                style: style_PREDIOSDELMUNICIPIO2016_5,
                interactive: true,
                title: '<img src="styles/legend/PREDIOSDELMUNICIPIO2016_5.png" /> PREDIOS DEL MUNICIPIO-2016'
            });
var format_Prediosparacompra_6 = new ol.format.GeoJSON();
var features_Prediosparacompra_6 = format_Prediosparacompra_6.readFeatures(json_Prediosparacompra_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prediosparacompra_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prediosparacompra_6.addFeatures(features_Prediosparacompra_6);
var lyr_Prediosparacompra_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Prediosparacompra_6, 
                style: style_Prediosparacompra_6,
                interactive: true,
                title: '<img src="styles/legend/Prediosparacompra_6.png" /> Predios para compra'
            });
var format_Casos_7 = new ol.format.GeoJSON();
var features_Casos_7 = format_Casos_7.readFeatures(json_Casos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casos_7.addFeatures(features_Casos_7);
var lyr_Casos_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Casos_7, 
                style: style_Casos_7,
                interactive: true,
                title: '<img src="styles/legend/Casos_7.png" /> Casos'
            });

lyr_reservaforestalprotectoraproductora138456_0.setVisible(true);lyr_polmin_1.setVisible(true);lyr_USOACTUALDELSUELO_2.setVisible(true);lyr_Educacionambiental_3.setVisible(true);lyr_Industria_4.setVisible(true);lyr_PREDIOSDELMUNICIPIO2016_5.setVisible(true);lyr_Prediosparacompra_6.setVisible(true);lyr_Casos_7.setVisible(true);
var layersList = [lyr_reservaforestalprotectoraproductora138456_0,lyr_polmin_1,lyr_USOACTUALDELSUELO_2,lyr_Educacionambiental_3,lyr_Industria_4,lyr_PREDIOSDELMUNICIPIO2016_5,lyr_Prediosparacompra_6,lyr_Casos_7];
lyr_reservaforestalprotectoraproductora138456_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'codigo': 'codigo', 'sector_cod': 'sector_cod', 'nombre': 'nombre', 'codigo_ant': 'codigo_ant', 'usuario_lo': 'usuario_lo', 'fecha_log': 'fecha_log', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_polmin_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'AREA': 'AREA', 'DESCRIPCIO': 'DESCRIPCIO', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'area_1': 'area_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_USOACTUALDELSUELO_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'VER_ID': 'VER_ID', 'PRUR_ID': 'PRUR_ID', 'CTERB': 'CTERB', 'BJECTID_1B': 'BJECTID_1B', 'MUNICIPIO': 'MUNICIPIO', 'ZONA': 'ZONA', 'MANZANA': 'MANZANA', 'PREDIO': 'PREDIO', 'NUMERO_ORD': 'NUMERO_ORD', 'TOTAL_REGI': 'TOTAL_REGI', 'NOMBRE': 'NOMBRE', 'TIPO_DOCUM': 'TIPO_DOCUM', 'NUMERO_DOC': 'NUMERO_DOC', 'DIRECCION': 'DIRECCION', 'AREA_TERRE': 'AREA_TERRE', 'AREA_CONST': 'AREA_CONST', 'AVALUO': 'AVALUO', 'CCATASTRAL': 'CCATASTRAL', 'USO': 'USO', 'CUBEWRTURA': 'CUBEWRTURA', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Educacionambiental_3.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', 'CURSOS': 'CURSOS', 'TEMAS': 'TEMAS', '2019': '2019', 'TIPO': 'TIPO', 'COBERTURA': 'COBERTURA', });
lyr_Industria_4.set('fieldAliases', {'Item': 'Item', 'x': 'x', 'y': 'y', 'Raz�n so': 'Raz�n so', 'NIT': 'NIT', });
lyr_PREDIOSDELMUNICIPIO2016_5.set('fieldAliases', {'codigo': 'codigo', 'vereda_cod': 'vereda_cod', 'numero_sub': 'numero_sub', 'codigo_ant': 'codigo_ant', 'usuario_lo': 'usuario_lo', 'fecha_log': 'fecha_log', 'Predia__fi': 'Predia__fi', 'DocID': 'DocID', 'OwnerID': 'OwnerID', 'CadType': 'CadType', 'Level': 'Level', 'Color': 'Color', 'LineWt': 'LineWt', 'Layer': 'Layer', 'Handle': 'Handle', 'RefName': 'RefName', 'Class': 'Class', 'Linetype': 'Linetype', 'LTScale': 'LTScale', 'Width': 'Width', 'Thickness': 'Thickness', 'CadAngle': 'CadAngle', 'CadModel': 'CadModel', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'ScaleX': 'ScaleX', 'ScaleY': 'ScaleY', 'ScaleZ': 'ScaleZ', 'QrotW': 'QrotW', 'QrotX': 'QrotX', 'QrotY': 'QrotY', 'QrotZ': 'QrotZ', 'Elevation': 'Elevation', 'FillColor': 'FillColor', 'GGroup': 'GGroup', 'LyrName': 'LyrName', 'LyrNum': 'LyrNum', 'LvlDesc': 'LvlDesc', 'LyrColor': 'LyrColor', 'LyrLineWt': 'LyrLineWt', 'LyrLnType': 'LyrLnType', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LvlPlot': 'LvlPlot', 'LyrHandle': 'LyrHandle', 'TxtValue': 'TxtValue', 'TxtMemo': 'TxtMemo', 'TxtHt': 'TxtHt', 'TxtRotate': 'TxtRotate', 'TxtWidth': 'TxtWidth', 'TxtOblique': 'TxtOblique', 'TxtGenType': 'TxtGenType', 'TxtJust': 'TxtJust', 'VertAlign': 'VertAlign', 'TxtStyle': 'TxtStyle', 'TxtFont': 'TxtFont', 'TxtBoxHt': 'TxtBoxHt', 'TxtBoxWd': 'TxtBoxWd', 'TxtRefWd': 'TxtRefWd', 'TxtAttach': 'TxtAttach', 'TxtDir': 'TxtDir', 'LnSpace': 'LnSpace', 'SpaceFact': 'SpaceFact', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'XDList': 'XDList', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', 'No': 'No', 'DENOMINACIO': 'DENOMINACIO', 'VEREDA': 'VEREDA', 'EXTENSION (': 'EXTENSION (', 'No MATRICUL': 'No MATRICUL', 'GEORREFEREN': 'GEORREFEREN', 'FECHA ADQUI': 'FECHA ADQUI', 'F09': 'F09', 'F10': 'F10', 'VALOR DE AD': 'VALOR DE AD', 'APORTE DE R': 'APORTE DE R', 'F13': 'F13', 'F14': 'F14', 'F15': 'F15', 'ESCRITURA N': 'ESCRITURA N', 'CUENCA': 'CUENCA', 'MICROCUENCA': 'MICROCUENCA', 'COMPRADO A': 'COMPRADO A', 'METROS LINI': 'METROS LINI', 'F21': 'F21', 'F22': 'F22', 'F23': 'F23', 'F24': 'F24', 'F25': 'F25', 'F26': 'F26', 'F27': 'F27', 'F28': 'F28', 'F29': 'F29', });
lyr_Prediosparacompra_6.set('fieldAliases', {'id': 'id', 'Propietari': 'Propietari', 'Cedula cat': 'Cedula cat', 'Area escr': 'Area escr', 'Area igac': 'Area igac', 'Telefono': 'Telefono', 'Problemas': 'Problemas', });
lyr_Casos_7.set('fieldAliases', {'RADICADO': 'RADICADO', 'FECHA': 'FECHA', 'TIPO': 'TIPO', 'SITIO': 'SITIO', 'RESULTADO': 'RESULTADO', 'DENUCIANTE': 'DENUCIANTE', 'DENUNCIADO': 'DENUNCIADO', 'MAGNITUD': 'MAGNITUD', 'X': 'X', 'Y': 'Y', 'OBSERVACIONES': 'OBSERVACIONES', });
lyr_reservaforestalprotectoraproductora138456_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'codigo': 'TextEdit', 'sector_cod': 'TextEdit', 'nombre': 'TextEdit', 'codigo_ant': 'TextEdit', 'usuario_lo': 'TextEdit', 'fecha_log': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_polmin_1.set('fieldImages', {'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'OBJECTID': 'Range', 'ID': 'TextEdit', 'AREA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'area_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_USOACTUALDELSUELO_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'VER_ID': 'TextEdit', 'PRUR_ID': 'TextEdit', 'CTERB': 'TextEdit', 'BJECTID_1B': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'ZONA': 'TextEdit', 'MANZANA': 'TextEdit', 'PREDIO': 'TextEdit', 'NUMERO_ORD': 'TextEdit', 'TOTAL_REGI': 'TextEdit', 'NOMBRE': 'TextEdit', 'TIPO_DOCUM': 'TextEdit', 'NUMERO_DOC': 'TextEdit', 'DIRECCION': 'TextEdit', 'AREA_TERRE': 'TextEdit', 'AREA_CONST': 'TextEdit', 'AVALUO': 'TextEdit', 'CCATASTRAL': 'TextEdit', 'USO': 'TextEdit', 'CUBEWRTURA': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'HECTARES': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Educacionambiental_3.set('fieldImages', {'id': '', 'NOMBRE': '', 'CURSOS': '', 'TEMAS': '', '2019': '', 'TIPO': '', 'COBERTURA': '', });
lyr_Industria_4.set('fieldImages', {'Item': '', 'x': '', 'y': '', 'Raz�n so': '', 'NIT': '', });
lyr_PREDIOSDELMUNICIPIO2016_5.set('fieldImages', {'codigo': '', 'vereda_cod': '', 'numero_sub': '', 'codigo_ant': '', 'usuario_lo': '', 'fecha_log': '', 'Predia__fi': '', 'DocID': '', 'OwnerID': '', 'CadType': '', 'Level': '', 'Color': '', 'LineWt': '', 'Layer': '', 'Handle': '', 'RefName': '', 'Class': '', 'Linetype': '', 'LTScale': '', 'Width': '', 'Thickness': '', 'CadAngle': '', 'CadModel': '', 'ExtX': '', 'ExtY': '', 'ExtZ': '', 'ScaleX': '', 'ScaleY': '', 'ScaleZ': '', 'QrotW': '', 'QrotX': '', 'QrotY': '', 'QrotZ': '', 'Elevation': '', 'FillColor': '', 'GGroup': '', 'LyrName': '', 'LyrNum': '', 'LvlDesc': '', 'LyrColor': '', 'LyrLineWt': '', 'LyrLnType': '', 'LyrFrzn': '', 'LyrLock': '', 'LyrOn': '', 'LyrVPFrzn': '', 'LvlPlot': '', 'LyrHandle': '', 'TxtValue': '', 'TxtMemo': '', 'TxtHt': '', 'TxtRotate': '', 'TxtWidth': '', 'TxtOblique': '', 'TxtGenType': '', 'TxtJust': '', 'VertAlign': '', 'TxtStyle': '', 'TxtFont': '', 'TxtBoxHt': '', 'TxtBoxWd': '', 'TxtRefWd': '', 'TxtAttach': '', 'TxtDir': '', 'LnSpace': '', 'SpaceFact': '', 'DocName': '', 'DocPath': '', 'DocType': '', 'DocVer': '', 'XDList': '', 'shape_Leng': '', 'shape_Area': '', 'No': '', 'DENOMINACIO': '', 'VEREDA': '', 'EXTENSION (': '', 'No MATRICUL': '', 'GEORREFEREN': '', 'FECHA ADQUI': '', 'F09': '', 'F10': '', 'VALOR DE AD': '', 'APORTE DE R': '', 'F13': '', 'F14': '', 'F15': '', 'ESCRITURA N': '', 'CUENCA': '', 'MICROCUENCA': '', 'COMPRADO A': '', 'METROS LINI': '', 'F21': '', 'F22': '', 'F23': '', 'F24': '', 'F25': '', 'F26': '', 'F27': '', 'F28': '', 'F29': '', });
lyr_Prediosparacompra_6.set('fieldImages', {'id': '', 'Propietari': '', 'Cedula cat': '', 'Area escr': '', 'Area igac': '', 'Telefono': '', 'Problemas': '', });
lyr_Casos_7.set('fieldImages', {'RADICADO': 'TextEdit', 'FECHA': 'TextEdit', 'TIPO': 'TextEdit', 'SITIO': 'TextEdit', 'RESULTADO': 'TextEdit', 'DENUCIANTE': 'TextEdit', 'DENUNCIADO': 'TextEdit', 'MAGNITUD': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OBSERVACIONES': 'TextEdit', });
lyr_reservaforestalprotectoraproductora138456_0.set('fieldLabels', {'OBJECTID': 'no label', 'codigo': 'no label', 'sector_cod': 'no label', 'nombre': 'no label', 'codigo_ant': 'no label', 'usuario_lo': 'no label', 'fecha_log': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', });
lyr_polmin_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'AREA': 'no label', 'DESCRIPCIO': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'area_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_USOACTUALDELSUELO_2.set('fieldLabels', {'OBJECTID': 'no label', 'VER_ID': 'no label', 'PRUR_ID': 'no label', 'CTERB': 'no label', 'BJECTID_1B': 'no label', 'MUNICIPIO': 'no label', 'ZONA': 'no label', 'MANZANA': 'no label', 'PREDIO': 'no label', 'NUMERO_ORD': 'no label', 'TOTAL_REGI': 'no label', 'NOMBRE': 'no label', 'TIPO_DOCUM': 'no label', 'NUMERO_DOC': 'no label', 'DIRECCION': 'no label', 'AREA_TERRE': 'no label', 'AREA_CONST': 'no label', 'AVALUO': 'no label', 'CCATASTRAL': 'no label', 'USO': 'inline label', 'CUBEWRTURA': 'header label', 'AREA': 'no label', 'PERIMETER': 'no label', 'HECTARES': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Educacionambiental_3.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'inline label', 'CURSOS': 'no label', 'TEMAS': 'no label', '2019': 'no label', 'TIPO': 'no label', 'COBERTURA': 'no label', });
lyr_Industria_4.set('fieldLabels', {'Item': 'no label', 'x': 'no label', 'y': 'no label', 'Raz�n so': 'inline label', 'NIT': 'no label', });
lyr_PREDIOSDELMUNICIPIO2016_5.set('fieldLabels', {'codigo': 'no label', 'vereda_cod': 'no label', 'numero_sub': 'no label', 'codigo_ant': 'no label', 'usuario_lo': 'no label', 'fecha_log': 'no label', 'Predia__fi': 'no label', 'DocID': 'no label', 'OwnerID': 'no label', 'CadType': 'no label', 'Level': 'no label', 'Color': 'no label', 'LineWt': 'no label', 'Layer': 'no label', 'Handle': 'no label', 'RefName': 'no label', 'Class': 'no label', 'Linetype': 'no label', 'LTScale': 'no label', 'Width': 'no label', 'Thickness': 'no label', 'CadAngle': 'no label', 'CadModel': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'ScaleX': 'no label', 'ScaleY': 'no label', 'ScaleZ': 'no label', 'QrotW': 'no label', 'QrotX': 'no label', 'QrotY': 'no label', 'QrotZ': 'no label', 'Elevation': 'no label', 'FillColor': 'no label', 'GGroup': 'no label', 'LyrName': 'no label', 'LyrNum': 'no label', 'LvlDesc': 'no label', 'LyrColor': 'no label', 'LyrLineWt': 'no label', 'LyrLnType': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LvlPlot': 'no label', 'LyrHandle': 'no label', 'TxtValue': 'no label', 'TxtMemo': 'no label', 'TxtHt': 'no label', 'TxtRotate': 'no label', 'TxtWidth': 'no label', 'TxtOblique': 'no label', 'TxtGenType': 'no label', 'TxtJust': 'no label', 'VertAlign': 'no label', 'TxtStyle': 'no label', 'TxtFont': 'no label', 'TxtBoxHt': 'no label', 'TxtBoxWd': 'no label', 'TxtRefWd': 'no label', 'TxtAttach': 'no label', 'TxtDir': 'no label', 'LnSpace': 'no label', 'SpaceFact': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'XDList': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', 'No': 'no label', 'DENOMINACIO': 'no label', 'VEREDA': 'no label', 'EXTENSION (': 'no label', 'No MATRICUL': 'no label', 'GEORREFEREN': 'no label', 'FECHA ADQUI': 'no label', 'F09': 'no label', 'F10': 'no label', 'VALOR DE AD': 'no label', 'APORTE DE R': 'no label', 'F13': 'no label', 'F14': 'no label', 'F15': 'no label', 'ESCRITURA N': 'no label', 'CUENCA': 'no label', 'MICROCUENCA': 'no label', 'COMPRADO A': 'no label', 'METROS LINI': 'no label', 'F21': 'no label', 'F22': 'no label', 'F23': 'no label', 'F24': 'no label', 'F25': 'no label', 'F26': 'no label', 'F27': 'no label', 'F28': 'no label', 'F29': 'no label', });
lyr_Prediosparacompra_6.set('fieldLabels', {'id': 'no label', 'Propietari': 'no label', 'Cedula cat': 'no label', 'Area escr': 'no label', 'Area igac': 'no label', 'Telefono': 'no label', 'Problemas': 'no label', });
lyr_Casos_7.set('fieldLabels', {'RADICADO': 'no label', 'FECHA': 'no label', 'TIPO': 'no label', 'SITIO': 'no label', 'RESULTADO': 'no label', 'DENUCIANTE': 'no label', 'DENUNCIADO': 'no label', 'MAGNITUD': 'no label', 'X': 'no label', 'Y': 'no label', 'OBSERVACIONES': 'no label', });
lyr_Casos_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});