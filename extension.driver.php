<?php

class extension_editor_for_symphony extends Extension
{
    public function getSubscribedDelegates()
    {
        return array(
            array(
                'page' => '/backend/',
                'delegate' => 'InitaliseAdminPageHead',
                'callback' => 'initaliseAdminPageHead'
            )
        );
    }

    public function initaliseAdminPageHead($context)
    {
        $page_callback = Administration::instance()->getPageCallback();
        $page_callback = $page_callback['context'];

        if (isset($page_callback['section_handle']) && ($page_callback['page'] == 'edit' || $page_callback['page'] == 'new')) {
            Administration::instance()->Page->addStylesheetToHead(URL . '/extensions/editor_for_symphony/assets/editor/editor.css');
            Administration::instance()->Page->addStylesheetToHead(URL . '/extensions/editor_for_symphony/assets/publish.editor.css');
            Administration::instance()->Page->addScriptToHead(URL . '/extensions/editor_for_symphony/assets/editor/editor.js');
            Administration::instance()->Page->addScriptToHead(URL . '/extensions/editor_for_symphony/assets/publish.editor.js');
        }
    }
}
