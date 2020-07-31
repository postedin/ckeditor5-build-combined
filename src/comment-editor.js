import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Link from '@ckeditor/ckeditor5-link/src/link';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import SimpleUploadAdapter from './simple-upload-adapter';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';

export default class CommentEditor extends ClassicEditorBase {
  constructor(...args) {
    super(...args);

    this.on('ready', () => {
      this.ui.view.top.remove(0);
    });
  }
}

CommentEditor.builtinPlugins = [
  Essentials, Autoformat, Bold, Italic, BlockQuote, Link, AutoLink,
  Paragraph, Code, TextTransformation, SimpleUploadAdapter,
];

CommentEditor.defaultConfig = {
  toolbar: false,
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'en',
};
