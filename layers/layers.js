var wms_layers = [];


        var lyr_googlehybrid_0 = new ol.layer.Tile({
            'title': 'google hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Beskyttedenaturtyper_Egedal_1 = new ol.format.GeoJSON();
var features_Beskyttedenaturtyper_Egedal_1 = format_Beskyttedenaturtyper_Egedal_1.readFeatures(json_Beskyttedenaturtyper_Egedal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beskyttedenaturtyper_Egedal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beskyttedenaturtyper_Egedal_1.addFeatures(features_Beskyttedenaturtyper_Egedal_1);
var lyr_Beskyttedenaturtyper_Egedal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beskyttedenaturtyper_Egedal_1, 
                style: style_Beskyttedenaturtyper_Egedal_1,
                popuplayertitle: 'Beskyttede naturtyper_Egedal',
                interactive: false,
                title: '<img src="styles/legend/Beskyttedenaturtyper_Egedal_1.png" /> Beskyttede naturtyper_Egedal'
            });
var format_Polygoner_2025_1alle_polygoner_egedal_2 = new ol.format.GeoJSON();
var features_Polygoner_2025_1alle_polygoner_egedal_2 = format_Polygoner_2025_1alle_polygoner_egedal_2.readFeatures(json_Polygoner_2025_1alle_polygoner_egedal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polygoner_2025_1alle_polygoner_egedal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polygoner_2025_1alle_polygoner_egedal_2.addFeatures(features_Polygoner_2025_1alle_polygoner_egedal_2);
var lyr_Polygoner_2025_1alle_polygoner_egedal_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polygoner_2025_1alle_polygoner_egedal_2, 
                style: style_Polygoner_2025_1alle_polygoner_egedal_2,
                popuplayertitle: 'Polygoner_2025_1 — alle_polygoner_egedal',
                interactive: true,
                title: '<img src="styles/legend/Polygoner_2025_1alle_polygoner_egedal_2.png" /> Polygoner_2025_1 — alle_polygoner_egedal'
            });
var format_kommunegrnse_Egedal_3 = new ol.format.GeoJSON();
var features_kommunegrnse_Egedal_3 = format_kommunegrnse_Egedal_3.readFeatures(json_kommunegrnse_Egedal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommunegrnse_Egedal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommunegrnse_Egedal_3.addFeatures(features_kommunegrnse_Egedal_3);
var lyr_kommunegrnse_Egedal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommunegrnse_Egedal_3, 
                style: style_kommunegrnse_Egedal_3,
                popuplayertitle: 'kommunegrænse_Egedal',
                interactive: false,
                title: '<img src="styles/legend/kommunegrnse_Egedal_3.png" /> kommunegrænse_Egedal'
            });

lyr_googlehybrid_0.setVisible(true);lyr_Beskyttedenaturtyper_Egedal_1.setVisible(true);lyr_Polygoner_2025_1alle_polygoner_egedal_2.setVisible(true);lyr_kommunegrnse_Egedal_3.setVisible(true);
var layersList = [lyr_googlehybrid_0,lyr_Beskyttedenaturtyper_Egedal_1,lyr_Polygoner_2025_1alle_polygoner_egedal_2,lyr_kommunegrnse_Egedal_3];
lyr_Beskyttedenaturtyper_Egedal_1.set('fieldAliases', {'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Natyp_kode': 'Natyp_kode', 'Natyp_navn': 'Natyp_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Sagsbeh': 'Sagsbeh', 'Gl_sys_ref': 'Gl_sys_ref', 'Besig_dato': 'Besig_dato', 'Journalnr': 'Journalnr', 'Vedligehol': 'Vedligehol', 'Vedligeh_1': 'Vedligeh_1', });
lyr_Polygoner_2025_1alle_polygoner_egedal_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Besigtiget': 'Besigtiget', 'areal(m2)': 'areal(m2)', 'ha': 'ha', 'Kommentar': 'Kommentar', });
lyr_kommunegrnse_Egedal_3.set('fieldAliases', {'id.namespa': 'id.namespa', 'id.lokalId': 'id.lokalId', 'registreri': 'registreri', 'senesteSag': 'senesteSag', 'virkningFr': 'virkningFr', 'virkningsa': 'virkningsa', 'kommunenav': 'kommunenav', 'kommunekod': 'kommunekod', });
lyr_Beskyttedenaturtyper_Egedal_1.set('fieldImages', {'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Natyp_kode': 'TextEdit', 'Natyp_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Sagsbeh': 'TextEdit', 'Gl_sys_ref': 'TextEdit', 'Besig_dato': 'TextEdit', 'Journalnr': 'TextEdit', 'Vedligehol': 'TextEdit', 'Vedligeh_1': 'TextEdit', });
lyr_Polygoner_2025_1alle_polygoner_egedal_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Besigtiget': 'TextEdit', 'areal(m2)': 'TextEdit', 'ha': 'TextEdit', 'Kommentar': 'TextEdit', });
lyr_kommunegrnse_Egedal_3.set('fieldImages', {'id.namespa': 'TextEdit', 'id.lokalId': 'TextEdit', 'registreri': 'TextEdit', 'senesteSag': 'TextEdit', 'virkningFr': 'TextEdit', 'virkningsa': 'TextEdit', 'kommunenav': 'TextEdit', 'kommunekod': 'TextEdit', });
lyr_Beskyttedenaturtyper_Egedal_1.set('fieldLabels', {'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Natyp_kode': 'no label', 'Natyp_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Sagsbeh': 'no label', 'Gl_sys_ref': 'no label', 'Besig_dato': 'no label', 'Journalnr': 'no label', 'Vedligehol': 'no label', 'Vedligeh_1': 'no label', });
lyr_Polygoner_2025_1alle_polygoner_egedal_2.set('fieldLabels', {'fid': 'inline label - always visible', 'id': 'hidden field', 'Besigtiget': 'inline label - always visible', 'areal(m2)': 'inline label - always visible', 'ha': 'inline label - always visible', 'Kommentar': 'inline label - always visible', });
lyr_kommunegrnse_Egedal_3.set('fieldLabels', {'id.namespa': 'no label', 'id.lokalId': 'no label', 'registreri': 'no label', 'senesteSag': 'no label', 'virkningFr': 'no label', 'virkningsa': 'no label', 'kommunenav': 'no label', 'kommunekod': 'no label', });
lyr_kommunegrnse_Egedal_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});