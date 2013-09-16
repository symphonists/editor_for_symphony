(function ($, Editor, undefined) {
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
    });
  };

}(this.jQuery, this.Editor));


(function ($, undefined) {
  'use strict';
  $(function () {
    $('textarea.markdown, textarea.markdown_extra, textarea.markdown_extra_with_smartypants, textarea.markdown_with_purifier').editorify();
  });
}(this.jQuery));
