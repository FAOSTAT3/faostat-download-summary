define(['jquery',
        'handlebars',
        'text!faostat_download_summary/html/templates.html',
        'i18n!faostat_download_summary/nls/translate',
        '!faostat_download_selector/faostat-download-selector',
        'bootstrap',
        'sweet-alert'], function ($, Handlebars, templates, translate, SELECTOR) {

    'use strict';

    function SUMMARY() {

        this.CONFIG = {
            lang: 'E',
            placeholder_id: 'placeholder',
            datasource: 'faostat',
            bulks_url: 'http://faostat3.fao.org/wds/rest/bulkdownloads',
            bulks_root: 'http://faostat.fao.org/Portals/_Faostat/Downloads/zip_files/',
            domain: null
        };

    }

    SUMMARY.prototype.init = function(config) {

        /* Extend default configuration. */
        this.CONFIG = $.extend(true, {}, this.CONFIG, config);

        /* Fix the language, if needed. */
        this.CONFIG.lang = this.CONFIG.lang != null ? this.CONFIG.lang : 'E';

        /* this... */
        var _this = this;

        /* Test. */
        var sel_1 = new SELECTOR();
        sel_1.init({
            placeholder_id: 'selector_1_placeholder',
            suffix: 'area',
            tabs :   [
                {
                    label: 'Countries',
                    rest: 'http://faostat3.fao.org/wds/rest/procedures/usp_GetListBox/faostatdb/GT/1/1/E'
                },
                {
                    label: 'Regions',
                    rest: 'http://faostat3.fao.org/wds/rest/procedures/usp_GetListBox/faostatdb/GT/1/2/E'
                },
                {
                    label: 'Special Groups',
                    rest: 'http://faostat3.fao.org/wds/rest/procedures/usp_GetListBox/faostatdb/GT/1/3/E'
                }
            ]
        });
        var sel_2 = new SELECTOR();
        sel_2.init({
            placeholder_id: 'selector_2_placeholder',
            suffix: 'element',
            tabs :   [
                {
                    label: 'Elements',
                    rest: 'http://faostat3.fao.org/wds/rest/procedures/usp_GetListBox/faostatdb/GT/2/1/E'
                }
            ]
        });
        var sel_3 = new SELECTOR();
        sel_3.init({
            placeholder_id: 'selector_3_placeholder',
            suffix: 'item',
            tabs :   [
                {
                    label: 'Items',
                    rest: 'http://faostat3.fao.org/wds/rest/procedures/usp_GetListBox/faostatdb/GT/3/1/E'
                },
                {
                    label: 'Item Aggregated',
                    rest: 'http://faostat3.fao.org/wds/rest/procedures/usp_GetListBox/faostatdb/GT/3/2/E'
                }
            ]
        });
        var sel_4 = new SELECTOR();
        sel_4.init({
            placeholder_id: 'selector_4_placeholder',
            suffix: 'year',
            tabs :   [
                {
                    label: 'Years',
                    rest: 'http://faostat3.fao.org/wds/rest/procedures/usp_GetListBox/faostatdb/GT/4/1/E'
                },
                {
                    label: 'Year Projections',
                    rest: 'http://faostat3.fao.org/wds/rest/procedures/usp_GetListBox/faostatdb/GT/4/2/E'
                }
            ]
        });

    };

    return SUMMARY;

});