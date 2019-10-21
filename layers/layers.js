var wms_layers = [];
var format_Vas_terciarias_0 = new ol.format.GeoJSON();
var features_Vas_terciarias_0 = format_Vas_terciarias_0.readFeatures(json_Vas_terciarias_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vas_terciarias_0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Vas_terciarias_0.addFeatures(features_Vas_terciarias_0);var lyr_Vas_terciarias_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vas_terciarias_0, 
                style: style_Vas_terciarias_0,
                title: '<img src="styles/legend/Vas_terciarias_0.png" /> Vías_terciarias'
            });

lyr_Vas_terciarias_0.setVisible(true);
var layersList = [lyr_Vas_terciarias_0];
lyr_Vas_terciarias_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SUBREGIÃ“N': 'SUBREGIÃ“N', 'MUNICIPIO': 'MUNICIPIO', 'NOMBRE_VÃ': 'NOMBRE_VÃ', 'CÃ“DIGO': 'CÃ“DIGO', 'COMPETENTE': 'COMPETENTE', 'INICIO': 'INICIO', 'FIN': 'FIN', 'CENTROS_PO': 'CENTROS_PO', 'ANCHO_CALZ': 'ANCHO_CALZ', 'CLASIFICAC': 'CLASIFICAC', 'SUPERFICIE': 'SUPERFICIE', 'FUENTE': 'FUENTE', 'PRODUCTO_P': 'PRODUCTO_P', 'LONG_KM': 'LONG_KM', 'ESTADO_DEF': 'ESTADO_DEF', });
lyr_Vas_terciarias_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'SUBREGIÃ“N': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'NOMBRE_VÃ': 'TextEdit', 'CÃ“DIGO': 'TextEdit', 'COMPETENTE': 'TextEdit', 'INICIO': 'TextEdit', 'FIN': 'TextEdit', 'CENTROS_PO': 'TextEdit', 'ANCHO_CALZ': 'TextEdit', 'CLASIFICAC': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'FUENTE': 'TextEdit', 'PRODUCTO_P': 'TextEdit', 'LONG_KM': 'TextEdit', 'ESTADO_DEF': 'TextEdit', });
lyr_Vas_terciarias_0.set('fieldLabels', {'OBJECTID': 'inline label', 'SUBREGIÃ“N': 'inline label', 'MUNICIPIO': 'header label', 'NOMBRE_VÃ': 'inline label', 'CÃ“DIGO': 'inline label', 'COMPETENTE': 'inline label', 'INICIO': 'inline label', 'FIN': 'inline label', 'CENTROS_PO': 'inline label', 'ANCHO_CALZ': 'inline label', 'CLASIFICAC': 'inline label', 'SUPERFICIE': 'inline label', 'FUENTE': 'inline label', 'PRODUCTO_P': 'inline label', 'LONG_KM': 'inline label', 'ESTADO_DEF': 'inline label', });
lyr_Vas_terciarias_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});