jQuery(document).ready(function() {
    var editor = new Editor({element: jQuery.find('textarea[class*=markdown]')[0]});
    editor.render();
});