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
        var sel = new SELECTOR();
        sel.init({
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

    };

    return SUMMARY;

});