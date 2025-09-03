const meta = document.getElementsByTagName("meta");

console.log(document.getElementsByTagName("html")[0].innerHTML);

for (const m of meta) {
    if (m.name === "-title") {
        document.title = m.content;
    }
}