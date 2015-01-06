(function($, Editor, undefined) {
    'use strict';

    if (typeof Editor === undefined) {
        throw new Error('Editor must be loaded beforehand this plugin');
    }

    $.fn.editorify = function (options) {
        options = options || {};
        return this.each(function (index, element) {
            var editor;
            options.element = element;
            editor = new Editor(options);
            $(element).data('editor', editor);
            editor.render();

            $(element).nextAll('.CodeMirror').css('height', window.getComputedStyle(element)['height']);
        });
    };

}(this.jQuery, this.Editor));

(function($, undefined) {
    'use strict';

    $(function() {
        $('textarea[class*="markdown"], textarea[class*="commonmark"]').editorify();
    });
}(this.jQuery));
