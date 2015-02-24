define(['jquery',
    'handlebars',
    'text!faostat_download_summary/html/templates.html',
    'i18n!faostat_download_summary/nls/translate',
    'bootstrap',
    'sweet-alert'], function ($, Handlebars, templates, translate) {

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

    };

    return SUMMARY;

});