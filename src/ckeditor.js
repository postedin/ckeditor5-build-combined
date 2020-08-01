import UpcastWriter from '@ckeditor/ckeditor5-engine/src/view/upcastwriter';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';
import ClassicEditor from './classic-editor';
import CommentEditor from './comment-editor';
import DecoupledEditor from './decoupled-document-editor';
import SimpleUploadAdapter from './simple-upload-adapter';

function injectExternalLinkPaste(editor) {
  const writer = new UpcastWriter(editor.editing.view.document);

  editor.plugins.get('Clipboard').on('inputTransformation', (evt, data) => {
    const element = data.content.getChild(0);

    if (element.name === 'a') {
      writer.setAttribute('target', '_blank', element);
      writer.setAttribute('rel', 'noopener noreferrer', element);

      data.content = writer.createDocumentFragment([
        writer.createElement(
          element.name,
          {
            href: element.getAttribute('href'),
            target: element.getAttribute('target'),
            rel: element.getAttribute('rel'),
          },
          [writer.createText(element.getAttribute('href'))],
        ),
      ]);
    }
  }, { priority: 'high' });
}

export default {
  ClassicEditor,
  CommentEditor,
  DecoupledEditor,
  SimpleUploadAdapter,
  WordCount,
  injectExternalLinkPaste,
};
