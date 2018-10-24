import grapesjs from 'grapesjs';
import $ from 'jquery';
import blocks from './blocks';

export default grapesjs.plugins.add('gjs-custom-blocks', (editor, opts = {}) => {

    opts.url && $.getJSON(opts.url, opts.data || {}, function (data, xhr) {
        blocks(editor, opts, data.data);
    });
});
