const div = dom.create("<div>new</div>");
console.log(div);
dom.after(test, div);
const div3 = dom.create('<div id="parent"></div>');
dom.wrap(test, div3);
const nodes = dom.empty(window.nodes);
console.log(nodes);
dom.attr(test, "title", "Hi I am Frank");
const title = dom.attr(test, "title");
console.log(`title: ${title}`);
dom.text(test, "\u8FD9\u662F\u66F4\u65B0\u7684\u5185\u5BB9");
console.log(dom.text(test));
dom.style(test, {
    border: "1px solid red",
    color: "blue"
});
console.log(dom.style(test, "border"));
dom.style(test, "border", "1px solid black");
dom.class.add(test, "red");
dom.class.add(test, "blue");
dom.class.remove(test, "blue");
console.log(dom.class.has(test, "blue"));
const fn = ()=>{
    console.log("\u70B9\u51FB\u4E86");
};
dom.on(test, "click", fn);
dom.off(test, "click", fn);
const testDiv = dom.find("#test")[0];
console.log(testDiv);
const test2 = dom.find("#test2")[0];
console.log(dom.find("#test2")[0]);
console.log(dom.parent(test));
console.log(dom.sibling(dom.find("#test")[0]));
const s2 = dom.find("#s2")[0];
console.log(dom.sibling(s2));
console.log(dom.next(s2));
console.log(dom.previous(s2));
const t = dom.find("#travel")[0];
dom.each(dom.children(t), (n)=>dom.style(n, "color,", "red"));
console.log(dom.index(s2));

//# sourceMappingURL=index.de158e3a.js.map
