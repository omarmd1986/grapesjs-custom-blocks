import $ from 'jquery';

export default (editor, config = {}, blocks) => {
    const bm = editor.BlockManager;

    $.each(blocks, function (index, item) {
        bm.add(item.id, item);
    });
}
