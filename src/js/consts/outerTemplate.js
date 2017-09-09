/**
 * @fileoverview Set outer template
 * @author NHN Ent. FE dev Lab <dl_javascript@nhnent.com>
 */

/**
 * Outer template
 * @type {{internalNode: string, leafNode: string}}
 */
module.exports = {
    ROOT: '<ul class="tui-tree tui-tree-root"></ul>',
    INTERNAL_NODE:
        '<li id="{{id}}" class="{{nodeClass}} {{stateClass}}">' +
            '{{innerTemplate}}' +
        '</li>',
    LEAF_NODE:
        '<li id="{{id}}" class="{{nodeClass}} {{leafClass}}">' +
            '{{innerTemplate}}' +
        '</li>'
};
