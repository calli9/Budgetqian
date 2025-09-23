const nav = [{
    href: "home.html",
    xlink: "../icomoon/all.svg#home3",
    span: "首页"
},
{
    href: "record.html",
    xlink: "../icomoon/all.svg#note-list",
    span: "记录"
},
{
    href: "add.html",
    xlink: "../icomoon/all.svg#add-solid",
    span: "添加"
},
{
    href: "statistic.html",
    xlink: "../icomoon/all.svg#pie-chart",
    span: "统计"
},
{
    href: "setting.html",
    xlink: "../icomoon/all.svg#cog",
    span: "设置"
}]

const html = ["home.html", "record.html", "add.html", "statistic.html", "setting.html"]

//action
document.write(`<nav class="flex shadow-nav" style="padding: .8rem 1.2rem">`)
for (let item = 0; item < 5; item++) {
    document.write(`
        <div>
            <a href="${nav[item].href}">
                <svg class="svg-big">
                    <use xlink:href="${nav[item].xlink}"></use>
                </svg>
                <span class="font-tiny font-fat">${nav[item].span}</span>
            </a>
        </div>
    `)
}
document.write(`</nav>`)
