/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js'
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js'
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js'
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js'
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js'
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js'
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js'
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js'
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js'
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js'
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js'
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js'
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js'
import Image from '@ckeditor/ckeditor5-image/src/image.js'
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js'
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js'
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js'
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js'
import Link from '@ckeditor/ckeditor5-link/src/link.js'
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage.js'
import List from '@ckeditor/ckeditor5-list/src/list.js'
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties.js'
import Markdown from '@ckeditor/ckeditor5-markdown-gfm/src/markdown.js'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js'
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters.js'
import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows.js'
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js'

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
  Alignment,
  BlockQuote,
  Bold,
  CloudServices,
  Code,
  CodeBlock,
  Essentials,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  Heading,
  HorizontalLine,
  Image,
  ImageCaption,
  ImageInsert,
  ImageResize,
  ImageUpload,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  Markdown,
  Paragraph,
  SpecialCharacters,
  SpecialCharactersArrows,
  Underline,
]

// Editor configuration.
Editor.defaultConfig = {
  toolbar: {
    items: [
      'heading',
      '|',
      'fontColor',
      'fontFamily',
      'fontSize',
      'fontBackgroundColor',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      '|',
      'imageUpload',
      'blockQuote',
      'undo',
      'redo',
      '|',
      'code',
      'codeBlock',
    ],
  },
  language: 'ko',
}

export default Editor
